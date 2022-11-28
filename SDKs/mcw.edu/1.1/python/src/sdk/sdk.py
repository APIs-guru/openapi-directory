

import requests
from sdk.models import operations
from . import utils




SERVERS = [
	"https://mcw.edu//rest.rgd.mcw.edu/rgdws",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def get_active_object_count_using_get(self, request: operations.GetActiveObjectCountUsingGetRequest) -> operations.GetActiveObjectCountUsingGetResponse:
        r"""Count of active objects by type, for specified species and date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/count/activeObject/{speciesTypeKey}/{dateYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActiveObjectCountUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_active_object_diff_using_get(self, request: operations.GetActiveObjectDiffUsingGetRequest) -> operations.GetActiveObjectDiffUsingGetResponse:
        r"""Count difference of active objects, by type, for specified species and date range
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/diff/activeObject/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActiveObjectDiffUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_affected_genomic_models_using_get(self, request: operations.GetAffectedGenomicModelsUsingGetRequest) -> operations.GetAffectedGenomicModelsUsingGetResponse:
        r"""Get affected genomic models (rat strains with gene alleles) submitted by RGD to AGR by taxonId
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/agr/affectedGenomicModels/{taxonId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAffectedGenomicModelsUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_all_annotated_genes_using_get(self, request: operations.GetAllAnnotatedGenesUsingGetRequest) -> operations.GetAllAnnotatedGenesUsingGetResponse:
        r"""Return a list of genes annotated to an ontology term
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/genes/annotation/{accId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllAnnotatedGenesUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_all_strains_using_get(self) -> operations.GetAllStrainsUsingGetResponse:
        r"""Return all active strains in RGD
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/strains/all"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllStrainsUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_alleles_for_taxon_using_get(self, request: operations.GetAllelesForTaxonUsingGetRequest) -> operations.GetAllelesForTaxonUsingGetResponse:
        r"""Get gene allele records submitted by RGD to AGR by taxonId
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/agr/alleles/{taxonId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllelesForTaxonUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_annotated_genes_using_post(self, request: operations.GetAnnotatedGenesUsingPostRequest) -> operations.GetAnnotatedGenesUsingPostResponse:
        r"""Return a list of genes annotated to an ontology term
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/genes/annotation"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnotatedGenesUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 201:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_annotation_count_by_acc_id_and_object_type_using_get(self, request: operations.GetAnnotationCountByAccIDAndObjectTypeUsingGetRequest) -> operations.GetAnnotationCountByAccIDAndObjectTypeUsingGetResponse:
        r"""Returns annotation count for ontology accession ID and object type
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/annotations/count/{accId}/{speciesTypeKey}/{includeChildren}/{objectType}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnotationCountByAccIDAndObjectTypeUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_annotation_count_by_acc_id_and_species_using_get(self, request: operations.GetAnnotationCountByAccIDAndSpeciesUsingGetRequest) -> operations.GetAnnotationCountByAccIDAndSpeciesUsingGetResponse:
        r"""Returns annotation count for ontology accession ID and speicies
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/annotations/count/{accId}/{speciesTypeKey}/{includeChildren}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnotationCountByAccIDAndSpeciesUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_annotation_count_by_acc_id_using_get(self, request: operations.GetAnnotationCountByAccIDUsingGetRequest) -> operations.GetAnnotationCountByAccIDUsingGetResponse:
        r"""Returns annotation count for ontology accession ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/annotations/count/{accId}/{includeChildren}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnotationCountByAccIDUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_annotations_by_acc_id_and_rgd_id_using_get(self, request: operations.GetAnnotationsByAccIDAndRgdIDUsingGetRequest) -> operations.GetAnnotationsByAccIDAndRgdIDUsingGetResponse:
        r"""Returns a list of annotations by RGD ID and ontology term accession ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/annotations/{accId}/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnotationsByAccIDAndRgdIDUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_annotations_by_rgd_id_and_ontology_using_get(self, request: operations.GetAnnotationsByRgdIDAndOntologyUsingGetRequest) -> operations.GetAnnotationsByRgdIDAndOntologyUsingGetResponse:
        r"""Returns a list of annotations by RGD ID and ontology prefix
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/annotations/rgdId/{rgdId}/{ontologyPrefix}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnotationsByRgdIDAndOntologyUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_annotations_by_rgd_id_using_get(self, request: operations.GetAnnotationsByRgdIDUsingGetRequest) -> operations.GetAnnotationsByRgdIDUsingGetResponse:
        r"""Returns a list of annotations by RGD ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/annotations/rgdId/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnotationsByRgdIDUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_annotations_using_get(self, request: operations.GetAnnotationsUsingGetRequest) -> operations.GetAnnotationsUsingGetResponse:
        r"""Returns a list annotations for an ontology term or a term and it's children
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/annotations/{accId}/{speciesTypeKey}/{includeChildren}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnotationsUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_annotations_using_post(self, request: operations.GetAnnotationsUsingPostRequest) -> operations.GetAnnotationsUsingPostResponse:
        r"""Return a list of genes annotated to an ontology term
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/annotations/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnotationsUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 201:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_annots_by_refrerence_using_get(self, request: operations.GetAnnotsByRefrerenceUsingGetRequest) -> operations.GetAnnotsByRefrerenceUsingGetResponse:
        r"""Returns a list of annotations for a reference
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/annotations/reference/{refRgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnnotsByRefrerenceUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_chart_info_using_get(self, request: operations.GetChartInfoUsingGetRequest) -> operations.GetChartInfoUsingGetResponse:
        r"""Return a list of quantitative phenotypes values based on a combination of Clinical Measurement, Experimental Condition, Rat Strain, and/or Measurement Method ontology terms.  Results will be all records that match all terms submitted.  Ontology ids should be submitted as a comma delimited list (ex. RS:0000029,CMO:0000155,CMO:0000139).  Species type is an integer value (3=rat, 4=chinchilla).  Reference RGD ID for a study works like a filter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phenotype/phenominer/chart/{speciesTypeKey}/{refRgdId}/{termString}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChartInfoUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_chart_info_using_get_1(self, request: operations.GetChartInfoUsingGet1Request) -> operations.GetChartInfoUsingGet1Response:
        r"""Return a list of quantitative phenotypes values based on a combination of Clinical Measurement, Experimental Condition, Rat Strain, and/or Measurement Method ontology terms.  Results will be all records that match all terms submitted.  Ontology ids should be submitted as a comma delimited list (ex. RS:0000029,CMO:0000155,CMO:0000139).  Species type is an integer value (3=rat, 4=chinchilla)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phenotype/phenominer/chart/{speciesTypeKey}/{termString}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChartInfoUsingGet1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_chromosome_by_assembly_using_get(self, request: operations.GetChromosomeByAssemblyUsingGetRequest) -> operations.GetChromosomeByAssemblyUsingGetResponse:
        r"""Return a list of chromosomes
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/maps/chr/{chromosome}/{mapKey}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChromosomeByAssemblyUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_chromosomes_by_assembly_using_get(self, request: operations.GetChromosomesByAssemblyUsingGetRequest) -> operations.GetChromosomesByAssemblyUsingGetResponse:
        r"""Return a list of chromosomes
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/maps/chr/{mapKey}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChromosomesByAssemblyUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_enrichment_data_using_post(self, request: operations.GetEnrichmentDataUsingPostRequest) -> operations.GetEnrichmentDataUsingPostResponse:
        r"""Return a list of genes annotated to the term.Genes are rgdids separated by comma.Species type is an integer value.term is the ontology
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/enrichment/annotatedGenes"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEnrichmentDataUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 201:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_enrichment_data_using_post_1(self, request: operations.GetEnrichmentDataUsingPost1Request) -> operations.GetEnrichmentDataUsingPost1Response:
        r"""Return a chart of ontology terms annotated to the genes.Genes are rgdids separated by comma.Species type is an integer value.Aspect is the Ontology group
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/enrichment/data"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEnrichmentDataUsingPost1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 201:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_ensembl_gene_mapping_using_get(self, request: operations.GetEnsemblGeneMappingUsingGetRequest) -> operations.GetEnsemblGeneMappingUsingGetResponse:
        r"""Translate an RGD ID to an Ensembl Gene  ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lookup/id/map/EnsemblGene/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEnsemblGeneMappingUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_ensembl_gene_mapping_using_post(self, request: operations.GetEnsemblGeneMappingUsingPostRequest) -> operations.GetEnsemblGeneMappingUsingPostResponse:
        r"""Translate RGD IDs to Ensembl Gene IDs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lookup/id/map/EnsemblGene"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEnsemblGeneMappingUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 201:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_ensembl_protein_mapping_using_get(self, request: operations.GetEnsemblProteinMappingUsingGetRequest) -> operations.GetEnsemblProteinMappingUsingGetResponse:
        r"""Translate an RGD ID to an Ensembl Protein ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lookup/id/map/EnsemblProtein/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEnsemblProteinMappingUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_ensembl_protein_mapping_using_post(self, request: operations.GetEnsemblProteinMappingUsingPostRequest) -> operations.GetEnsemblProteinMappingUsingPostResponse:
        r"""Translate RGD IDs to Ensembl Protein IDs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lookup/id/map/EnsemblProtein"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEnsemblProteinMappingUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 201:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_ensembl_transcript_mapping_using_get(self, request: operations.GetEnsemblTranscriptMappingUsingGetRequest) -> operations.GetEnsemblTranscriptMappingUsingGetResponse:
        r"""Translate an RGD ID to an Ensembl Transcript ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lookup/id/map/EnsemblTranscript/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEnsemblTranscriptMappingUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_ensembl_transcript_mapping_using_post(self, request: operations.GetEnsemblTranscriptMappingUsingPostRequest) -> operations.GetEnsemblTranscriptMappingUsingPostResponse:
        r"""Translate RGD IDs to Ensembl Transcript IDs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lookup/id/map/EnsemblTranscript"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEnsemblTranscriptMappingUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 201:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_expression_for_taxon_using_get(self, request: operations.GetExpressionForTaxonUsingGetRequest) -> operations.GetExpressionForTaxonUsingGetResponse:
        r"""Get expression annotations submitted by RGD to AGR by taxonId
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/agr/expression/{taxonId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExpressionForTaxonUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_gtex_mapping_using_get(self, request: operations.GetGtexMappingUsingGetRequest) -> operations.GetGtexMappingUsingGetResponse:
        r"""Translate an RGD ID to an GTEx ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lookup/id/map/GTEx/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGtexMappingUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_gtex_mapping_using_post(self, request: operations.GetGtexMappingUsingPostRequest) -> operations.GetGtexMappingUsingPostResponse:
        r"""Translate RGD IDs to GTEx IDs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lookup/id/map/GTEx"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGtexMappingUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 201:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_gen_bank_nucleotide_mapping_using_get(self, request: operations.GetGenBankNucleotideMappingUsingGetRequest) -> operations.GetGenBankNucleotideMappingUsingGetResponse:
        r"""Translate an RGD ID to a GenBank Nucleotide ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lookup/id/map/GenBankNucleotide/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenBankNucleotideMappingUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_gen_bank_nucleotide_mapping_using_post(self, request: operations.GetGenBankNucleotideMappingUsingPostRequest) -> operations.GetGenBankNucleotideMappingUsingPostResponse:
        r"""Translate RGD IDs to GenBank Nucleotide IDs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lookup/id/map/GenBankNucleotide"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenBankNucleotideMappingUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 201:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_gen_bank_protein_mapping_using_get(self, request: operations.GetGenBankProteinMappingUsingGetRequest) -> operations.GetGenBankProteinMappingUsingGetResponse:
        r"""Translate an RGD ID to a GenBank Protein ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lookup/id/map/GenBankProtein/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenBankProteinMappingUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_gen_bank_protein_mapping_using_post(self, request: operations.GetGenBankProteinMappingUsingPostRequest) -> operations.GetGenBankProteinMappingUsingPostResponse:
        r"""Translate RGD IDs to GenBank Protein IDs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lookup/id/map/GenBankProtein"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenBankProteinMappingUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 201:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_gene_alleles_using_get(self, request: operations.GetGeneAllelesUsingGetRequest) -> operations.GetGeneAllelesUsingGetResponse:
        r"""Return a list of gene alleles
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/genes/allele/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeneAllelesUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_gene_by_map_key_using_get(self, request: operations.GetGeneByMapKeyUsingGetRequest) -> operations.GetGeneByMapKeyUsingGetResponse:
        r"""Return a list of all genes with position information for an assembly
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/genes/map/{mapKey}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeneByMapKeyUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_gene_by_rgd_id_using_get(self, request: operations.GetGeneByRgdIDUsingGetRequest) -> operations.GetGeneByRgdIDUsingGetResponse:
        r"""Get a gene record by RGD ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/genes/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeneByRgdIDUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_gene_by_symbol_using_get(self, request: operations.GetGeneBySymbolUsingGetRequest) -> operations.GetGeneBySymbolUsingGetResponse:
        r"""Get a gene record by symbol and species type key
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/genes/{symbol}/{speciesTypeKey}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeneBySymbolUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_gene_orthologs_using_get(self, request: operations.GetGeneOrthologsUsingGetRequest) -> operations.GetGeneOrthologsUsingGetResponse:
        r"""Return a list of gene orthologs
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/genes/orthologs/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeneOrthologsUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_gene_type_count_using_get(self, request: operations.GetGeneTypeCountUsingGetRequest) -> operations.GetGeneTypeCountUsingGetResponse:
        r"""Count of gene types, for specified species and date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/count/geneType/{speciesTypeKey}/{dateYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeneTypeCountUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_gene_type_diff_using_get(self, request: operations.GetGeneTypeDiffUsingGetRequest) -> operations.GetGeneTypeDiffUsingGetResponse:
        r"""Count difference of gene types, for specified species and date range
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/diff/geneType/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeneTypeDiffUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_gene_types_using_get(self) -> operations.GetGeneTypesUsingGetResponse:
        r"""Returns a list of gene types avialable in RGD
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lookup/geneTypes"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeneTypesUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_genes_annotated_using_get(self, request: operations.GetGenesAnnotatedUsingGetRequest) -> operations.GetGenesAnnotatedUsingGetResponse:
        r"""Return a list of genes annotated to an ontology term
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/genes/annotation/{accId}/{speciesTypeKey}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenesAnnotatedUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_genes_by_affy_id_using_get(self, request: operations.GetGenesByAffyIDUsingGetRequest) -> operations.GetGenesByAffyIDUsingGetResponse:
        r"""Return a list of genes for an affymetrix ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/genes/affyId/{affyId}/{speciesTypeKey}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenesByAffyIDUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_genes_by_alias_symbol_using_get(self, request: operations.GetGenesByAliasSymbolUsingGetRequest) -> operations.GetGenesByAliasSymbolUsingGetResponse:
        r"""Return a list of genes for an alias and species
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/genes/alias/{aliasSymbol}/{speciesTypeKey}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenesByAliasSymbolUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_genes_by_keyword_using_get(self, request: operations.GetGenesByKeywordUsingGetRequest) -> operations.GetGenesByKeywordUsingGetResponse:
        r"""Return a list of genes by keyword and species type key
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/genes/keyword/{keyword}/{speciesTypeKey}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenesByKeywordUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_genes_by_position_using_get(self, request: operations.GetGenesByPositionUsingGetRequest) -> operations.GetGenesByPositionUsingGetResponse:
        r"""Return a list of genes position and map key
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/genes/{chr}/{start}/{stop}/{mapKey}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenesByPositionUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_genes_by_species_using_get(self, request: operations.GetGenesBySpeciesUsingGetRequest) -> operations.GetGenesBySpeciesUsingGetResponse:
        r"""Return a list of all genes for a species in RGD
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/genes/species/{speciesTypeKey}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenesBySpeciesUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_genes_for_latest_assembly_using_get(self, request: operations.GetGenesForLatestAssemblyUsingGetRequest) -> operations.GetGenesForLatestAssemblyUsingGetResponse:
        r"""Get gene records submitted by RGD to AGR by taxonId
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/agr/{taxonId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenesForLatestAssemblyUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_genes_in_region_using_get(self, request: operations.GetGenesInRegionUsingGetRequest) -> operations.GetGenesInRegionUsingGetResponse:
        r"""Return a list of genes in region
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/genes/region/{chr}/{start}/{stop}/{mapKey}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenesInRegionUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_hgnc_mapping_using_get(self, request: operations.GetHgncMappingUsingGetRequest) -> operations.GetHgncMappingUsingGetResponse:
        r"""Translate an RGD ID to an HGNC ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lookup/id/map/HGNC/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHgncMappingUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_hgnc_mapping_using_post(self, request: operations.GetHgncMappingUsingPostRequest) -> operations.GetHgncMappingUsingPostResponse:
        r"""Translate RGD IDs to HGNC IDs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lookup/id/map/HGNC"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHgncMappingUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 201:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_mgi_mapping_using_get(self, request: operations.GetMgiMappingUsingGetRequest) -> operations.GetMgiMappingUsingGetResponse:
        r"""Translate an RGD ID to an MGI ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lookup/id/map/MGI/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMgiMappingUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_mgi_mapping_using_post(self, request: operations.GetMgiMappingUsingPostRequest) -> operations.GetMgiMappingUsingPostResponse:
        r"""Translate RGD IDs to MGI IDs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lookup/id/map/MGI"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMgiMappingUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 201:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_mapped_genes_by_position_using_get(self, request: operations.GetMappedGenesByPositionUsingGetRequest) -> operations.GetMappedGenesByPositionUsingGetResponse:
        r"""Return a list of genes position and map key
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/genes/mapped/{chr}/{start}/{stop}/{mapKey}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMappedGenesByPositionUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_mapped_qtl_by_position_using_get(self, request: operations.GetMappedQtlByPositionUsingGetRequest) -> operations.GetMappedQtlByPositionUsingGetResponse:
        r"""Returns a list QTL for given position and assembly map
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/qtls/mapped/{chr}/{start}/{stop}/{mapKey}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMappedQtlByPositionUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_mapped_sslp_by_position_using_get(self, request: operations.GetMappedSslpByPositionUsingGetRequest) -> operations.GetMappedSslpByPositionUsingGetResponse:
        r"""Returns a list SSLP for given position and assembly map
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/sslps/mapped/{chr}/{start}/{stop}/{mapKey}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMappedSslpByPositionUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_maps_by_species_using_get(self, request: operations.GetMapsBySpeciesUsingGetRequest) -> operations.GetMapsBySpeciesUsingGetResponse:
        r"""Return a list of assemblies
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/maps/{speciesTypeKey}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMapsBySpeciesUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_maps_using_get(self, request: operations.GetMapsUsingGetRequest) -> operations.GetMapsUsingGetResponse:
        r"""Return a list assembly maps for a species
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lookup/maps/{speciesTypeKey}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMapsUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_maps_using_get_1(self, request: operations.GetMapsUsingGet1Request) -> operations.GetMapsUsingGet1Response:
        r"""Return a standardUnit for an ontology if it exists
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lookup/standardUnit/{accId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMapsUsingGet1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.get_maps_using_get_1_200_wildcard_string = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_ncbi_gene_mapping_using_get(self, request: operations.GetNcbiGeneMappingUsingGetRequest) -> operations.GetNcbiGeneMappingUsingGetResponse:
        r"""Translate an RGD ID to an NCBI Gene ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lookup/id/map/NCBIGene/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNcbiGeneMappingUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_ncbi_gene_mapping_using_post(self, request: operations.GetNcbiGeneMappingUsingPostRequest) -> operations.GetNcbiGeneMappingUsingPostResponse:
        r"""Translate RGD IDs to NCBI Gene IDs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lookup/id/map/NCBIGene"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNcbiGeneMappingUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 201:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_object_status_count_using_get(self, request: operations.GetObjectStatusCountUsingGetRequest) -> operations.GetObjectStatusCountUsingGetResponse:
        r"""Count of objects with given status, for specified species and date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/count/objectStatus/{speciesTypeKey}/{dateYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetObjectStatusCountUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_object_status_diff_using_get(self, request: operations.GetObjectStatusDiffUsingGetRequest) -> operations.GetObjectStatusDiffUsingGetResponse:
        r"""Count difference of objects with given status, for specified species and date range
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/diff/objectStatus/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetObjectStatusDiffUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_objects_with_ref_seq_count_using_get(self, request: operations.GetObjectsWithRefSeqCountUsingGetRequest) -> operations.GetObjectsWithRefSeqCountUsingGetResponse:
        r"""Count of objects with reference sequence(s), by object type, for specified species and date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/count/objectWithRefSeq/{speciesTypeKey}/{dateYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetObjectsWithRefSeqCountUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_objects_with_ref_seq_diff_using_get(self, request: operations.GetObjectsWithRefSeqDiffUsingGetRequest) -> operations.GetObjectsWithRefSeqDiffUsingGetResponse:
        r"""Count difference of objects with reference sequence(s), by object type, for specified species and date range
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/diff/objectWithRefSeq/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetObjectsWithRefSeqDiffUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_objects_with_reference_count_using_get(self, request: operations.GetObjectsWithReferenceCountUsingGetRequest) -> operations.GetObjectsWithReferenceCountUsingGetResponse:
        r"""Count of objects with reference, by object type, for specified species and date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/count/objectWithReference/{speciesTypeKey}/{dateYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetObjectsWithReferenceCountUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_objects_with_reference_diff_using_get(self, request: operations.GetObjectsWithReferenceDiffUsingGetRequest) -> operations.GetObjectsWithReferenceDiffUsingGetResponse:
        r"""Count difference of objects with reference, by object type, for specified species and date range
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/diff/objectWithReference/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetObjectsWithReferenceDiffUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_objects_with_xd_bs_count_using_get(self, request: operations.GetObjectsWithXdBsCountUsingGetRequest) -> operations.GetObjectsWithXdBsCountUsingGetResponse:
        r"""Count of objects with external database ids, by database id, for specified species, object type and date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/count/objectWithXdb/{speciesTypeKey}/{objectKey}/{dateYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetObjectsWithXdBsCountUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_objects_with_xd_bs_diff_using_get(self, request: operations.GetObjectsWithXdBsDiffUsingGetRequest) -> operations.GetObjectsWithXdBsDiffUsingGetResponse:
        r"""Count difference of objects with external database ids, by database id, for specified species, object type and date range
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/diff/objectWithXdb/{speciesTypeKey}/{objectKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetObjectsWithXdBsDiffUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_ont_dags_using_get(self, request: operations.GetOntDagsUsingGetRequest) -> operations.GetOntDagsUsingGetResponse:
        r"""Returns child and parent terms for Accession ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ontology/ont/{accId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOntDagsUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_orthologs_by_list_using_post(self, request: operations.GetOrthologsByListUsingPostRequest) -> operations.GetOrthologsByListUsingPostResponse:
        r"""Return a list of gene orthologs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/genes/orthologs"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrthologsByListUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 201:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_pathways_with_diagrams_for_category_using_get(self, request: operations.GetPathwaysWithDiagramsForCategoryUsingGetRequest) -> operations.GetPathwaysWithDiagramsForCategoryUsingGetResponse:
        r"""Return a list of pathways based on category provided
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pathways/diagramsForCategory/{category}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPathwaysWithDiagramsForCategoryUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_phenotypes_for_taxon_using_get(self, request: operations.GetPhenotypesForTaxonUsingGetRequest) -> operations.GetPhenotypesForTaxonUsingGetResponse:
        r"""Get phenotype annotations submitted by RGD to AGR by taxonId
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/agr/phenotypes/{taxonId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPhenotypesForTaxonUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_protein_interaction_count_using_get(self, request: operations.GetProteinInteractionCountUsingGetRequest) -> operations.GetProteinInteractionCountUsingGetResponse:
        r"""Count of protein interactions, for specified species and date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/count/proteinInteraction/{speciesTypeKey}/{dateYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProteinInteractionCountUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_protein_interaction_diff_using_get(self, request: operations.GetProteinInteractionDiffUsingGetRequest) -> operations.GetProteinInteractionDiffUsingGetResponse:
        r"""Count difference of protein interactions, for specified species and date range
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/diff/proteinInteraction/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProteinInteractionDiffUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_qtl_by_rgd_id_using_get(self, request: operations.GetQtlByRgdIDUsingGetRequest) -> operations.GetQtlByRgdIDUsingGetResponse:
        r"""Return a QTL for provided RGD ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/qtls/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQtlByRgdIDUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_qtl_inheritance_type_count_using_get(self, request: operations.GetQtlInheritanceTypeCountUsingGetRequest) -> operations.GetQtlInheritanceTypeCountUsingGetResponse:
        r"""Count of strains, by qtl inheritance type, for specified species and date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/count/qtlInheritanceType/{speciesTypeKey}/{dateYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQtlInheritanceTypeCountUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_qtl_inheritance_type_diff_using_get(self, request: operations.GetQtlInheritanceTypeDiffUsingGetRequest) -> operations.GetQtlInheritanceTypeDiffUsingGetResponse:
        r"""Count difference of strains, by qtl inheritance type, for specified species and date range
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/diff/qtlInheritanceType/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQtlInheritanceTypeDiffUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_qtl_list_by_position_using_get(self, request: operations.GetQtlListByPositionUsingGetRequest) -> operations.GetQtlListByPositionUsingGetResponse:
        r"""Returns a list QTL for given position and assembly map
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/qtls/{chr}/{start}/{stop}/{mapKey}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQtlListByPositionUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_retired_object_count_using_get(self, request: operations.GetRetiredObjectCountUsingGetRequest) -> operations.GetRetiredObjectCountUsingGetResponse:
        r"""Count of retired objects by type, for specified species and date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/count/retiredObject/{speciesTypeKey}/{dateYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRetiredObjectCountUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_retired_object_diff_using_get(self, request: operations.GetRetiredObjectDiffUsingGetRequest) -> operations.GetRetiredObjectDiffUsingGetResponse:
        r"""Count difference of retired objects, by type, for specified species and date range
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/diff/retiredObject/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRetiredObjectDiffUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_species_types_using_get(self) -> operations.GetSpeciesTypesUsingGetResponse:
        r"""Return a Map of species type keys available in RGD
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lookup/speciesTypeKeys"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSpeciesTypesUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_strain_by_rgd_id_using_get(self, request: operations.GetStrainByRgdIDUsingGetRequest) -> operations.GetStrainByRgdIDUsingGetResponse:
        r"""Return a strain by RGD ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/strains/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStrainByRgdIDUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_strain_type_count_using_get(self, request: operations.GetStrainTypeCountUsingGetRequest) -> operations.GetStrainTypeCountUsingGetResponse:
        r"""Count of strain types, for specified species and date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/count/strainType/{speciesTypeKey}/{dateYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStrainTypeCountUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_strain_type_diff_using_get(self, request: operations.GetStrainTypeDiffUsingGetRequest) -> operations.GetStrainTypeDiffUsingGetResponse:
        r"""Count difference of strain types, for specified species and date range
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/diff/strainType/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStrainTypeDiffUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_strains_by_position_using_get(self, request: operations.GetStrainsByPositionUsingGetRequest) -> operations.GetStrainsByPositionUsingGetResponse:
        r"""Return all active strains by position
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/strains/{chr}/{start}/{stop}/{mapKey}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStrainsByPositionUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_term_acc_ids_using_get(self, request: operations.GetTermAccIdsUsingGetRequest) -> operations.GetTermAccIdsUsingGetResponse:
        r"""Returns a list ontology term accession IDs annotated to an rgd object
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/annotations/accId/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTermAccIdsUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_term_stats_using_get(self, request: operations.GetTermStatsUsingGetRequest) -> operations.GetTermStatsUsingGetResponse:
        r"""getTermStats
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/term/{accId}/{filterAccId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTermStatsUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_term_using_get(self, request: operations.GetTermUsingGetRequest) -> operations.GetTermUsingGetResponse:
        r"""Returns term for Accession ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ontology/term/{accId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTermUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_uni_prot_mapping_using_get(self, request: operations.GetUniProtMappingUsingGetRequest) -> operations.GetUniProtMappingUsingGetResponse:
        r"""Translate an RGD ID to a UniProt ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lookup/id/map/UniProt/{rgdId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUniProtMappingUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_uni_prot_mapping_using_post(self, request: operations.GetUniProtMappingUsingPostRequest) -> operations.GetUniProtMappingUsingPostResponse:
        r"""Translate RGD IDs to UniProt IDs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lookup/id/map/UniProt"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUniProtMappingUsingPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 201:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_variants_for_taxon_using_get(self, request: operations.GetVariantsForTaxonUsingGetRequest) -> operations.GetVariantsForTaxonUsingGetResponse:
        r"""Get basic variant records submitted by RGD to AGR by taxonId
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/agr/variants/{taxonId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVariantsForTaxonUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_withdrawn_object_count_using_get(self, request: operations.GetWithdrawnObjectCountUsingGetRequest) -> operations.GetWithdrawnObjectCountUsingGetResponse:
        r"""Count of withdrawn objects by type, for specified species and date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/count/withdrawnObject/{speciesTypeKey}/{dateYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWithdrawnObjectCountUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_withdrawn_object_diff_using_get(self, request: operations.GetWithdrawnObjectDiffUsingGetRequest) -> operations.GetWithdrawnObjectDiffUsingGetResponse:
        r"""Count difference of withdrawn objects, by type, for specified species and date range
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/diff/withdrawnObject/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWithdrawnObjectDiffUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_xdbs_count_using_get(self, request: operations.GetXdbsCountUsingGetRequest) -> operations.GetXdbsCountUsingGetResponse:
        r"""Count of external database ids, for specied species and date
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/count/xdb/{speciesTypeKey}/{dateYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetXdbsCountUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_xdbs_diff_using_get(self, request: operations.GetXdbsDiffUsingGetRequest) -> operations.GetXdbsDiffUsingGetResponse:
        r"""Count difference of external database ids, for specified species and date range
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stats/diff/xdb/{speciesTypeKey}/{dateFromYYYYMMDD}/{dateToYYYYMMDD}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetXdbsDiffUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def is_descendant_of_using_get(self, request: operations.IsDescendantOfUsingGetRequest) -> operations.IsDescendantOfUsingGetResponse:
        r"""Returns true or false for terms
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ontology/term/{accId1}/{accId2}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.IsDescendantOfUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def search_pathways_using_get(self, request: operations.SearchPathwaysUsingGetRequest) -> operations.SearchPathwaysUsingGetResponse:
        r"""Return a list of pathways based on search term
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pathways/diagrams/search/{searchString}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchPathwaysUsingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            pass

        return res

    