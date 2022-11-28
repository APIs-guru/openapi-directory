import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://mcw.edu//rest.rgd.mcw.edu/rgdws"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getActiveObjectCountUsingGet - Count of active objects by type, for specified species and date
    **/
    getActiveObjectCountUsingGet(req: operations.GetActiveObjectCountUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetActiveObjectCountUsingGetResponse>;
    /**
     * getActiveObjectDiffUsingGet - Count difference of active objects, by type, for specified species and date range
    **/
    getActiveObjectDiffUsingGet(req: operations.GetActiveObjectDiffUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetActiveObjectDiffUsingGetResponse>;
    /**
     * getAffectedGenomicModelsUsingGet - Get affected genomic models (rat strains with gene alleles) submitted by RGD to AGR by taxonId
    **/
    getAffectedGenomicModelsUsingGet(req: operations.GetAffectedGenomicModelsUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetAffectedGenomicModelsUsingGetResponse>;
    /**
     * getAllAnnotatedGenesUsingGet - Return a list of genes annotated to an ontology term
    **/
    getAllAnnotatedGenesUsingGet(req: operations.GetAllAnnotatedGenesUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetAllAnnotatedGenesUsingGetResponse>;
    /**
     * getAllStrainsUsingGet - Return all active strains in RGD
    **/
    getAllStrainsUsingGet(config?: AxiosRequestConfig): Promise<operations.GetAllStrainsUsingGetResponse>;
    /**
     * getAllelesForTaxonUsingGet - Get gene allele records submitted by RGD to AGR by taxonId
    **/
    getAllelesForTaxonUsingGet(req: operations.GetAllelesForTaxonUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetAllelesForTaxonUsingGetResponse>;
    /**
     * getAnnotatedGenesUsingPost - Return a list of genes annotated to an ontology term
    **/
    getAnnotatedGenesUsingPost(req: operations.GetAnnotatedGenesUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotatedGenesUsingPostResponse>;
    /**
     * getAnnotationCountByAccIdAndObjectTypeUsingGet - Returns annotation count for ontology accession ID and object type
    **/
    getAnnotationCountByAccIdAndObjectTypeUsingGet(req: operations.GetAnnotationCountByAccIdAndObjectTypeUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotationCountByAccIdAndObjectTypeUsingGetResponse>;
    /**
     * getAnnotationCountByAccIdAndSpeciesUsingGet - Returns annotation count for ontology accession ID and speicies
    **/
    getAnnotationCountByAccIdAndSpeciesUsingGet(req: operations.GetAnnotationCountByAccIdAndSpeciesUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotationCountByAccIdAndSpeciesUsingGetResponse>;
    /**
     * getAnnotationCountByAccIdUsingGet - Returns annotation count for ontology accession ID
    **/
    getAnnotationCountByAccIdUsingGet(req: operations.GetAnnotationCountByAccIdUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotationCountByAccIdUsingGetResponse>;
    /**
     * getAnnotationsByAccIdAndRgdIdUsingGet - Returns a list of annotations by RGD ID and ontology term accession ID
    **/
    getAnnotationsByAccIdAndRgdIdUsingGet(req: operations.GetAnnotationsByAccIdAndRgdIdUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotationsByAccIdAndRgdIdUsingGetResponse>;
    /**
     * getAnnotationsByRgdIdAndOntologyUsingGet - Returns a list of annotations by RGD ID and ontology prefix
    **/
    getAnnotationsByRgdIdAndOntologyUsingGet(req: operations.GetAnnotationsByRgdIdAndOntologyUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotationsByRgdIdAndOntologyUsingGetResponse>;
    /**
     * getAnnotationsByRgdIdUsingGet - Returns a list of annotations by RGD ID
    **/
    getAnnotationsByRgdIdUsingGet(req: operations.GetAnnotationsByRgdIdUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotationsByRgdIdUsingGetResponse>;
    /**
     * getAnnotationsUsingGet - Returns a list annotations for an ontology term or a term and it's children
    **/
    getAnnotationsUsingGet(req: operations.GetAnnotationsUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotationsUsingGetResponse>;
    /**
     * getAnnotationsUsingPost - Return a list of genes annotated to an ontology term
    **/
    getAnnotationsUsingPost(req: operations.GetAnnotationsUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotationsUsingPostResponse>;
    /**
     * getAnnotsByRefrerenceUsingGet - Returns a list of annotations for a reference
    **/
    getAnnotsByRefrerenceUsingGet(req: operations.GetAnnotsByRefrerenceUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotsByRefrerenceUsingGetResponse>;
    /**
     * getChartInfoUsingGet - Return a list of quantitative phenotypes values based on a combination of Clinical Measurement, Experimental Condition, Rat Strain, and/or Measurement Method ontology terms.  Results will be all records that match all terms submitted.  Ontology ids should be submitted as a comma delimited list (ex. RS:0000029,CMO:0000155,CMO:0000139).  Species type is an integer value (3=rat, 4=chinchilla).  Reference RGD ID for a study works like a filter.
    **/
    getChartInfoUsingGet(req: operations.GetChartInfoUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetChartInfoUsingGetResponse>;
    /**
     * getChartInfoUsingGet1 - Return a list of quantitative phenotypes values based on a combination of Clinical Measurement, Experimental Condition, Rat Strain, and/or Measurement Method ontology terms.  Results will be all records that match all terms submitted.  Ontology ids should be submitted as a comma delimited list (ex. RS:0000029,CMO:0000155,CMO:0000139).  Species type is an integer value (3=rat, 4=chinchilla)
    **/
    getChartInfoUsingGet1(req: operations.GetChartInfoUsingGet1Request, config?: AxiosRequestConfig): Promise<operations.GetChartInfoUsingGet1Response>;
    /**
     * getChromosomeByAssemblyUsingGet - Return a list of chromosomes
    **/
    getChromosomeByAssemblyUsingGet(req: operations.GetChromosomeByAssemblyUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetChromosomeByAssemblyUsingGetResponse>;
    /**
     * getChromosomesByAssemblyUsingGet - Return a list of chromosomes
    **/
    getChromosomesByAssemblyUsingGet(req: operations.GetChromosomesByAssemblyUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetChromosomesByAssemblyUsingGetResponse>;
    /**
     * getEnrichmentDataUsingPost - Return a list of genes annotated to the term.Genes are rgdids separated by comma.Species type is an integer value.term is the ontology
    **/
    getEnrichmentDataUsingPost(req: operations.GetEnrichmentDataUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetEnrichmentDataUsingPostResponse>;
    /**
     * getEnrichmentDataUsingPost1 - Return a chart of ontology terms annotated to the genes.Genes are rgdids separated by comma.Species type is an integer value.Aspect is the Ontology group
    **/
    getEnrichmentDataUsingPost1(req: operations.GetEnrichmentDataUsingPost1Request, config?: AxiosRequestConfig): Promise<operations.GetEnrichmentDataUsingPost1Response>;
    /**
     * getEnsemblGeneMappingUsingGet - Translate an RGD ID to an Ensembl Gene  ID
    **/
    getEnsemblGeneMappingUsingGet(req: operations.GetEnsemblGeneMappingUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetEnsemblGeneMappingUsingGetResponse>;
    /**
     * getEnsemblGeneMappingUsingPost - Translate RGD IDs to Ensembl Gene IDs
    **/
    getEnsemblGeneMappingUsingPost(req: operations.GetEnsemblGeneMappingUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetEnsemblGeneMappingUsingPostResponse>;
    /**
     * getEnsemblProteinMappingUsingGet - Translate an RGD ID to an Ensembl Protein ID
    **/
    getEnsemblProteinMappingUsingGet(req: operations.GetEnsemblProteinMappingUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetEnsemblProteinMappingUsingGetResponse>;
    /**
     * getEnsemblProteinMappingUsingPost - Translate RGD IDs to Ensembl Protein IDs
    **/
    getEnsemblProteinMappingUsingPost(req: operations.GetEnsemblProteinMappingUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetEnsemblProteinMappingUsingPostResponse>;
    /**
     * getEnsemblTranscriptMappingUsingGet - Translate an RGD ID to an Ensembl Transcript ID
    **/
    getEnsemblTranscriptMappingUsingGet(req: operations.GetEnsemblTranscriptMappingUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetEnsemblTranscriptMappingUsingGetResponse>;
    /**
     * getEnsemblTranscriptMappingUsingPost - Translate RGD IDs to Ensembl Transcript IDs
    **/
    getEnsemblTranscriptMappingUsingPost(req: operations.GetEnsemblTranscriptMappingUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetEnsemblTranscriptMappingUsingPostResponse>;
    /**
     * getExpressionForTaxonUsingGet - Get expression annotations submitted by RGD to AGR by taxonId
    **/
    getExpressionForTaxonUsingGet(req: operations.GetExpressionForTaxonUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetExpressionForTaxonUsingGetResponse>;
    /**
     * getGtexMappingUsingGet - Translate an RGD ID to an GTEx ID
    **/
    getGtexMappingUsingGet(req: operations.GetGtexMappingUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGtexMappingUsingGetResponse>;
    /**
     * getGtexMappingUsingPost - Translate RGD IDs to GTEx IDs
    **/
    getGtexMappingUsingPost(req: operations.GetGtexMappingUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetGtexMappingUsingPostResponse>;
    /**
     * getGenBankNucleotideMappingUsingGet - Translate an RGD ID to a GenBank Nucleotide ID
    **/
    getGenBankNucleotideMappingUsingGet(req: operations.GetGenBankNucleotideMappingUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGenBankNucleotideMappingUsingGetResponse>;
    /**
     * getGenBankNucleotideMappingUsingPost - Translate RGD IDs to GenBank Nucleotide IDs
    **/
    getGenBankNucleotideMappingUsingPost(req: operations.GetGenBankNucleotideMappingUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetGenBankNucleotideMappingUsingPostResponse>;
    /**
     * getGenBankProteinMappingUsingGet - Translate an RGD ID to a GenBank Protein ID
    **/
    getGenBankProteinMappingUsingGet(req: operations.GetGenBankProteinMappingUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGenBankProteinMappingUsingGetResponse>;
    /**
     * getGenBankProteinMappingUsingPost - Translate RGD IDs to GenBank Protein IDs
    **/
    getGenBankProteinMappingUsingPost(req: operations.GetGenBankProteinMappingUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetGenBankProteinMappingUsingPostResponse>;
    /**
     * getGeneAllelesUsingGet - Return a list of gene alleles
    **/
    getGeneAllelesUsingGet(req: operations.GetGeneAllelesUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGeneAllelesUsingGetResponse>;
    /**
     * getGeneByMapKeyUsingGet - Return a list of all genes with position information for an assembly
    **/
    getGeneByMapKeyUsingGet(req: operations.GetGeneByMapKeyUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGeneByMapKeyUsingGetResponse>;
    /**
     * getGeneByRgdIdUsingGet - Get a gene record by RGD ID
    **/
    getGeneByRgdIdUsingGet(req: operations.GetGeneByRgdIdUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGeneByRgdIdUsingGetResponse>;
    /**
     * getGeneBySymbolUsingGet - Get a gene record by symbol and species type key
    **/
    getGeneBySymbolUsingGet(req: operations.GetGeneBySymbolUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGeneBySymbolUsingGetResponse>;
    /**
     * getGeneOrthologsUsingGet - Return a list of gene orthologs
    **/
    getGeneOrthologsUsingGet(req: operations.GetGeneOrthologsUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGeneOrthologsUsingGetResponse>;
    /**
     * getGeneTypeCountUsingGet - Count of gene types, for specified species and date
    **/
    getGeneTypeCountUsingGet(req: operations.GetGeneTypeCountUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGeneTypeCountUsingGetResponse>;
    /**
     * getGeneTypeDiffUsingGet - Count difference of gene types, for specified species and date range
    **/
    getGeneTypeDiffUsingGet(req: operations.GetGeneTypeDiffUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGeneTypeDiffUsingGetResponse>;
    /**
     * getGeneTypesUsingGet - Returns a list of gene types avialable in RGD
    **/
    getGeneTypesUsingGet(config?: AxiosRequestConfig): Promise<operations.GetGeneTypesUsingGetResponse>;
    /**
     * getGenesAnnotatedUsingGet - Return a list of genes annotated to an ontology term
    **/
    getGenesAnnotatedUsingGet(req: operations.GetGenesAnnotatedUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGenesAnnotatedUsingGetResponse>;
    /**
     * getGenesByAffyIdUsingGet - Return a list of genes for an affymetrix ID
    **/
    getGenesByAffyIdUsingGet(req: operations.GetGenesByAffyIdUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGenesByAffyIdUsingGetResponse>;
    /**
     * getGenesByAliasSymbolUsingGet - Return a list of genes for an alias and species
    **/
    getGenesByAliasSymbolUsingGet(req: operations.GetGenesByAliasSymbolUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGenesByAliasSymbolUsingGetResponse>;
    /**
     * getGenesByKeywordUsingGet - Return a list of genes by keyword and species type key
    **/
    getGenesByKeywordUsingGet(req: operations.GetGenesByKeywordUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGenesByKeywordUsingGetResponse>;
    /**
     * getGenesByPositionUsingGet - Return a list of genes position and map key
    **/
    getGenesByPositionUsingGet(req: operations.GetGenesByPositionUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGenesByPositionUsingGetResponse>;
    /**
     * getGenesBySpeciesUsingGet - Return a list of all genes for a species in RGD
    **/
    getGenesBySpeciesUsingGet(req: operations.GetGenesBySpeciesUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGenesBySpeciesUsingGetResponse>;
    /**
     * getGenesForLatestAssemblyUsingGet - Get gene records submitted by RGD to AGR by taxonId
    **/
    getGenesForLatestAssemblyUsingGet(req: operations.GetGenesForLatestAssemblyUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGenesForLatestAssemblyUsingGetResponse>;
    /**
     * getGenesInRegionUsingGet - Return a list of genes in region
    **/
    getGenesInRegionUsingGet(req: operations.GetGenesInRegionUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGenesInRegionUsingGetResponse>;
    /**
     * getHgncMappingUsingGet - Translate an RGD ID to an HGNC ID
    **/
    getHgncMappingUsingGet(req: operations.GetHgncMappingUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetHgncMappingUsingGetResponse>;
    /**
     * getHgncMappingUsingPost - Translate RGD IDs to HGNC IDs
    **/
    getHgncMappingUsingPost(req: operations.GetHgncMappingUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetHgncMappingUsingPostResponse>;
    /**
     * getMgiMappingUsingGet - Translate an RGD ID to an MGI ID
    **/
    getMgiMappingUsingGet(req: operations.GetMgiMappingUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetMgiMappingUsingGetResponse>;
    /**
     * getMgiMappingUsingPost - Translate RGD IDs to MGI IDs
    **/
    getMgiMappingUsingPost(req: operations.GetMgiMappingUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetMgiMappingUsingPostResponse>;
    /**
     * getMappedGenesByPositionUsingGet - Return a list of genes position and map key
    **/
    getMappedGenesByPositionUsingGet(req: operations.GetMappedGenesByPositionUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetMappedGenesByPositionUsingGetResponse>;
    /**
     * getMappedQtlByPositionUsingGet - Returns a list QTL for given position and assembly map
    **/
    getMappedQtlByPositionUsingGet(req: operations.GetMappedQtlByPositionUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetMappedQtlByPositionUsingGetResponse>;
    /**
     * getMappedSslpByPositionUsingGet - Returns a list SSLP for given position and assembly map
    **/
    getMappedSslpByPositionUsingGet(req: operations.GetMappedSslpByPositionUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetMappedSslpByPositionUsingGetResponse>;
    /**
     * getMapsBySpeciesUsingGet - Return a list of assemblies
    **/
    getMapsBySpeciesUsingGet(req: operations.GetMapsBySpeciesUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetMapsBySpeciesUsingGetResponse>;
    /**
     * getMapsUsingGet - Return a list assembly maps for a species
    **/
    getMapsUsingGet(req: operations.GetMapsUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetMapsUsingGetResponse>;
    /**
     * getMapsUsingGet1 - Return a standardUnit for an ontology if it exists
    **/
    getMapsUsingGet1(req: operations.GetMapsUsingGet1Request, config?: AxiosRequestConfig): Promise<operations.GetMapsUsingGet1Response>;
    /**
     * getNcbiGeneMappingUsingGet - Translate an RGD ID to an NCBI Gene ID
    **/
    getNcbiGeneMappingUsingGet(req: operations.GetNcbiGeneMappingUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetNcbiGeneMappingUsingGetResponse>;
    /**
     * getNcbiGeneMappingUsingPost - Translate RGD IDs to NCBI Gene IDs
    **/
    getNcbiGeneMappingUsingPost(req: operations.GetNcbiGeneMappingUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetNcbiGeneMappingUsingPostResponse>;
    /**
     * getObjectStatusCountUsingGet - Count of objects with given status, for specified species and date
    **/
    getObjectStatusCountUsingGet(req: operations.GetObjectStatusCountUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectStatusCountUsingGetResponse>;
    /**
     * getObjectStatusDiffUsingGet - Count difference of objects with given status, for specified species and date range
    **/
    getObjectStatusDiffUsingGet(req: operations.GetObjectStatusDiffUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectStatusDiffUsingGetResponse>;
    /**
     * getObjectsWithRefSeqCountUsingGet - Count of objects with reference sequence(s), by object type, for specified species and date
    **/
    getObjectsWithRefSeqCountUsingGet(req: operations.GetObjectsWithRefSeqCountUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectsWithRefSeqCountUsingGetResponse>;
    /**
     * getObjectsWithRefSeqDiffUsingGet - Count difference of objects with reference sequence(s), by object type, for specified species and date range
    **/
    getObjectsWithRefSeqDiffUsingGet(req: operations.GetObjectsWithRefSeqDiffUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectsWithRefSeqDiffUsingGetResponse>;
    /**
     * getObjectsWithReferenceCountUsingGet - Count of objects with reference, by object type, for specified species and date
    **/
    getObjectsWithReferenceCountUsingGet(req: operations.GetObjectsWithReferenceCountUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectsWithReferenceCountUsingGetResponse>;
    /**
     * getObjectsWithReferenceDiffUsingGet - Count difference of objects with reference, by object type, for specified species and date range
    **/
    getObjectsWithReferenceDiffUsingGet(req: operations.GetObjectsWithReferenceDiffUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectsWithReferenceDiffUsingGetResponse>;
    /**
     * getObjectsWithXdBsCountUsingGet - Count of objects with external database ids, by database id, for specified species, object type and date
    **/
    getObjectsWithXdBsCountUsingGet(req: operations.GetObjectsWithXdBsCountUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectsWithXdBsCountUsingGetResponse>;
    /**
     * getObjectsWithXdBsDiffUsingGet - Count difference of objects with external database ids, by database id, for specified species, object type and date range
    **/
    getObjectsWithXdBsDiffUsingGet(req: operations.GetObjectsWithXdBsDiffUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectsWithXdBsDiffUsingGetResponse>;
    /**
     * getOntDagsUsingGet - Returns child and parent terms for Accession ID
    **/
    getOntDagsUsingGet(req: operations.GetOntDagsUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetOntDagsUsingGetResponse>;
    /**
     * getOrthologsByListUsingPost - Return a list of gene orthologs
    **/
    getOrthologsByListUsingPost(req: operations.GetOrthologsByListUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetOrthologsByListUsingPostResponse>;
    /**
     * getPathwaysWithDiagramsForCategoryUsingGet - Return a list of pathways based on category provided
    **/
    getPathwaysWithDiagramsForCategoryUsingGet(req: operations.GetPathwaysWithDiagramsForCategoryUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetPathwaysWithDiagramsForCategoryUsingGetResponse>;
    /**
     * getPhenotypesForTaxonUsingGet - Get phenotype annotations submitted by RGD to AGR by taxonId
    **/
    getPhenotypesForTaxonUsingGet(req: operations.GetPhenotypesForTaxonUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetPhenotypesForTaxonUsingGetResponse>;
    /**
     * getProteinInteractionCountUsingGet - Count of protein interactions, for specified species and date
    **/
    getProteinInteractionCountUsingGet(req: operations.GetProteinInteractionCountUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetProteinInteractionCountUsingGetResponse>;
    /**
     * getProteinInteractionDiffUsingGet - Count difference of protein interactions, for specified species and date range
    **/
    getProteinInteractionDiffUsingGet(req: operations.GetProteinInteractionDiffUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetProteinInteractionDiffUsingGetResponse>;
    /**
     * getQtlByRgdIdUsingGet - Return a QTL for provided RGD ID
    **/
    getQtlByRgdIdUsingGet(req: operations.GetQtlByRgdIdUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetQtlByRgdIdUsingGetResponse>;
    /**
     * getQtlInheritanceTypeCountUsingGet - Count of strains, by qtl inheritance type, for specified species and date
    **/
    getQtlInheritanceTypeCountUsingGet(req: operations.GetQtlInheritanceTypeCountUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetQtlInheritanceTypeCountUsingGetResponse>;
    /**
     * getQtlInheritanceTypeDiffUsingGet - Count difference of strains, by qtl inheritance type, for specified species and date range
    **/
    getQtlInheritanceTypeDiffUsingGet(req: operations.GetQtlInheritanceTypeDiffUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetQtlInheritanceTypeDiffUsingGetResponse>;
    /**
     * getQtlListByPositionUsingGet - Returns a list QTL for given position and assembly map
    **/
    getQtlListByPositionUsingGet(req: operations.GetQtlListByPositionUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetQtlListByPositionUsingGetResponse>;
    /**
     * getRetiredObjectCountUsingGet - Count of retired objects by type, for specified species and date
    **/
    getRetiredObjectCountUsingGet(req: operations.GetRetiredObjectCountUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetRetiredObjectCountUsingGetResponse>;
    /**
     * getRetiredObjectDiffUsingGet - Count difference of retired objects, by type, for specified species and date range
    **/
    getRetiredObjectDiffUsingGet(req: operations.GetRetiredObjectDiffUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetRetiredObjectDiffUsingGetResponse>;
    /**
     * getSpeciesTypesUsingGet - Return a Map of species type keys available in RGD
    **/
    getSpeciesTypesUsingGet(config?: AxiosRequestConfig): Promise<operations.GetSpeciesTypesUsingGetResponse>;
    /**
     * getStrainByRgdIdUsingGet - Return a strain by RGD ID
    **/
    getStrainByRgdIdUsingGet(req: operations.GetStrainByRgdIdUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetStrainByRgdIdUsingGetResponse>;
    /**
     * getStrainTypeCountUsingGet - Count of strain types, for specified species and date
    **/
    getStrainTypeCountUsingGet(req: operations.GetStrainTypeCountUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetStrainTypeCountUsingGetResponse>;
    /**
     * getStrainTypeDiffUsingGet - Count difference of strain types, for specified species and date range
    **/
    getStrainTypeDiffUsingGet(req: operations.GetStrainTypeDiffUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetStrainTypeDiffUsingGetResponse>;
    /**
     * getStrainsByPositionUsingGet - Return all active strains by position
    **/
    getStrainsByPositionUsingGet(req: operations.GetStrainsByPositionUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetStrainsByPositionUsingGetResponse>;
    /**
     * getTermAccIdsUsingGet - Returns a list ontology term accession IDs annotated to an rgd object
    **/
    getTermAccIdsUsingGet(req: operations.GetTermAccIdsUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetTermAccIdsUsingGetResponse>;
    /**
     * getTermStatsUsingGet - getTermStats
    **/
    getTermStatsUsingGet(req: operations.GetTermStatsUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetTermStatsUsingGetResponse>;
    /**
     * getTermUsingGet - Returns term for Accession ID
    **/
    getTermUsingGet(req: operations.GetTermUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetTermUsingGetResponse>;
    /**
     * getUniProtMappingUsingGet - Translate an RGD ID to a UniProt ID
    **/
    getUniProtMappingUsingGet(req: operations.GetUniProtMappingUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetUniProtMappingUsingGetResponse>;
    /**
     * getUniProtMappingUsingPost - Translate RGD IDs to UniProt IDs
    **/
    getUniProtMappingUsingPost(req: operations.GetUniProtMappingUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetUniProtMappingUsingPostResponse>;
    /**
     * getVariantsForTaxonUsingGet - Get basic variant records submitted by RGD to AGR by taxonId
    **/
    getVariantsForTaxonUsingGet(req: operations.GetVariantsForTaxonUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetVariantsForTaxonUsingGetResponse>;
    /**
     * getWithdrawnObjectCountUsingGet - Count of withdrawn objects by type, for specified species and date
    **/
    getWithdrawnObjectCountUsingGet(req: operations.GetWithdrawnObjectCountUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetWithdrawnObjectCountUsingGetResponse>;
    /**
     * getWithdrawnObjectDiffUsingGet - Count difference of withdrawn objects, by type, for specified species and date range
    **/
    getWithdrawnObjectDiffUsingGet(req: operations.GetWithdrawnObjectDiffUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetWithdrawnObjectDiffUsingGetResponse>;
    /**
     * getXdbsCountUsingGet - Count of external database ids, for specied species and date
    **/
    getXdbsCountUsingGet(req: operations.GetXdbsCountUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetXdbsCountUsingGetResponse>;
    /**
     * getXdbsDiffUsingGet - Count difference of external database ids, for specified species and date range
    **/
    getXdbsDiffUsingGet(req: operations.GetXdbsDiffUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetXdbsDiffUsingGetResponse>;
    /**
     * isDescendantOfUsingGet - Returns true or false for terms
    **/
    isDescendantOfUsingGet(req: operations.IsDescendantOfUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.IsDescendantOfUsingGetResponse>;
    /**
     * searchPathwaysUsingGet - Return a list of pathways based on search term
    **/
    searchPathwaysUsingGet(req: operations.SearchPathwaysUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.SearchPathwaysUsingGetResponse>;
}
export {};
