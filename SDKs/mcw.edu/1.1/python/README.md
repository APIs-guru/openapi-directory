# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetActiveObjectCountUsingGetRequest(
    path_params=operations.GetActiveObjectCountUsingGetPathParams(
        date_yyyymmdd="corporis",
        species_type_key=1343366322133149537,
    ),
)
    
res = s.sdk.get_active_object_count_using_get(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `get_active_object_count_using_get` - Count of active objects by type, for specified species and date
* `get_active_object_diff_using_get` - Count difference of active objects, by type, for specified species and date range
* `get_affected_genomic_models_using_get` - Get affected genomic models (rat strains with gene alleles) submitted by RGD to AGR by taxonId
* `get_all_annotated_genes_using_get` - Return a list of genes annotated to an ontology term
* `get_all_strains_using_get` - Return all active strains in RGD
* `get_alleles_for_taxon_using_get` - Get gene allele records submitted by RGD to AGR by taxonId
* `get_annotated_genes_using_post` - Return a list of genes annotated to an ontology term
* `get_annotation_count_by_acc_id_and_object_type_using_get` - Returns annotation count for ontology accession ID and object type
* `get_annotation_count_by_acc_id_and_species_using_get` - Returns annotation count for ontology accession ID and speicies
* `get_annotation_count_by_acc_id_using_get` - Returns annotation count for ontology accession ID
* `get_annotations_by_acc_id_and_rgd_id_using_get` - Returns a list of annotations by RGD ID and ontology term accession ID
* `get_annotations_by_rgd_id_and_ontology_using_get` - Returns a list of annotations by RGD ID and ontology prefix
* `get_annotations_by_rgd_id_using_get` - Returns a list of annotations by RGD ID
* `get_annotations_using_get` - Returns a list annotations for an ontology term or a term and it's children
* `get_annotations_using_post` - Return a list of genes annotated to an ontology term
* `get_annots_by_refrerence_using_get` - Returns a list of annotations for a reference
* `get_chart_info_using_get` - Return a list of quantitative phenotypes values based on a combination of Clinical Measurement, Experimental Condition, Rat Strain, and/or Measurement Method ontology terms.  Results will be all records that match all terms submitted.  Ontology ids should be submitted as a comma delimited list (ex. RS:0000029,CMO:0000155,CMO:0000139).  Species type is an integer value (3=rat, 4=chinchilla).  Reference RGD ID for a study works like a filter.
* `get_chart_info_using_get_1` - Return a list of quantitative phenotypes values based on a combination of Clinical Measurement, Experimental Condition, Rat Strain, and/or Measurement Method ontology terms.  Results will be all records that match all terms submitted.  Ontology ids should be submitted as a comma delimited list (ex. RS:0000029,CMO:0000155,CMO:0000139).  Species type is an integer value (3=rat, 4=chinchilla)
* `get_chromosome_by_assembly_using_get` - Return a list of chromosomes
* `get_chromosomes_by_assembly_using_get` - Return a list of chromosomes
* `get_enrichment_data_using_post` - Return a list of genes annotated to the term.Genes are rgdids separated by comma.Species type is an integer value.term is the ontology
* `get_enrichment_data_using_post_1` - Return a chart of ontology terms annotated to the genes.Genes are rgdids separated by comma.Species type is an integer value.Aspect is the Ontology group
* `get_ensembl_gene_mapping_using_get` - Translate an RGD ID to an Ensembl Gene  ID
* `get_ensembl_gene_mapping_using_post` - Translate RGD IDs to Ensembl Gene IDs
* `get_ensembl_protein_mapping_using_get` - Translate an RGD ID to an Ensembl Protein ID
* `get_ensembl_protein_mapping_using_post` - Translate RGD IDs to Ensembl Protein IDs
* `get_ensembl_transcript_mapping_using_get` - Translate an RGD ID to an Ensembl Transcript ID
* `get_ensembl_transcript_mapping_using_post` - Translate RGD IDs to Ensembl Transcript IDs
* `get_expression_for_taxon_using_get` - Get expression annotations submitted by RGD to AGR by taxonId
* `get_gtex_mapping_using_get` - Translate an RGD ID to an GTEx ID
* `get_gtex_mapping_using_post` - Translate RGD IDs to GTEx IDs
* `get_gen_bank_nucleotide_mapping_using_get` - Translate an RGD ID to a GenBank Nucleotide ID
* `get_gen_bank_nucleotide_mapping_using_post` - Translate RGD IDs to GenBank Nucleotide IDs
* `get_gen_bank_protein_mapping_using_get` - Translate an RGD ID to a GenBank Protein ID
* `get_gen_bank_protein_mapping_using_post` - Translate RGD IDs to GenBank Protein IDs
* `get_gene_alleles_using_get` - Return a list of gene alleles
* `get_gene_by_map_key_using_get` - Return a list of all genes with position information for an assembly
* `get_gene_by_rgd_id_using_get` - Get a gene record by RGD ID
* `get_gene_by_symbol_using_get` - Get a gene record by symbol and species type key
* `get_gene_orthologs_using_get` - Return a list of gene orthologs
* `get_gene_type_count_using_get` - Count of gene types, for specified species and date
* `get_gene_type_diff_using_get` - Count difference of gene types, for specified species and date range
* `get_gene_types_using_get` - Returns a list of gene types avialable in RGD
* `get_genes_annotated_using_get` - Return a list of genes annotated to an ontology term
* `get_genes_by_affy_id_using_get` - Return a list of genes for an affymetrix ID
* `get_genes_by_alias_symbol_using_get` - Return a list of genes for an alias and species
* `get_genes_by_keyword_using_get` - Return a list of genes by keyword and species type key
* `get_genes_by_position_using_get` - Return a list of genes position and map key
* `get_genes_by_species_using_get` - Return a list of all genes for a species in RGD
* `get_genes_for_latest_assembly_using_get` - Get gene records submitted by RGD to AGR by taxonId
* `get_genes_in_region_using_get` - Return a list of genes in region
* `get_hgnc_mapping_using_get` - Translate an RGD ID to an HGNC ID
* `get_hgnc_mapping_using_post` - Translate RGD IDs to HGNC IDs
* `get_mgi_mapping_using_get` - Translate an RGD ID to an MGI ID
* `get_mgi_mapping_using_post` - Translate RGD IDs to MGI IDs
* `get_mapped_genes_by_position_using_get` - Return a list of genes position and map key
* `get_mapped_qtl_by_position_using_get` - Returns a list QTL for given position and assembly map
* `get_mapped_sslp_by_position_using_get` - Returns a list SSLP for given position and assembly map
* `get_maps_by_species_using_get` - Return a list of assemblies
* `get_maps_using_get` - Return a list assembly maps for a species
* `get_maps_using_get_1` - Return a standardUnit for an ontology if it exists
* `get_ncbi_gene_mapping_using_get` - Translate an RGD ID to an NCBI Gene ID
* `get_ncbi_gene_mapping_using_post` - Translate RGD IDs to NCBI Gene IDs
* `get_object_status_count_using_get` - Count of objects with given status, for specified species and date
* `get_object_status_diff_using_get` - Count difference of objects with given status, for specified species and date range
* `get_objects_with_ref_seq_count_using_get` - Count of objects with reference sequence(s), by object type, for specified species and date
* `get_objects_with_ref_seq_diff_using_get` - Count difference of objects with reference sequence(s), by object type, for specified species and date range
* `get_objects_with_reference_count_using_get` - Count of objects with reference, by object type, for specified species and date
* `get_objects_with_reference_diff_using_get` - Count difference of objects with reference, by object type, for specified species and date range
* `get_objects_with_xd_bs_count_using_get` - Count of objects with external database ids, by database id, for specified species, object type and date
* `get_objects_with_xd_bs_diff_using_get` - Count difference of objects with external database ids, by database id, for specified species, object type and date range
* `get_ont_dags_using_get` - Returns child and parent terms for Accession ID
* `get_orthologs_by_list_using_post` - Return a list of gene orthologs
* `get_pathways_with_diagrams_for_category_using_get` - Return a list of pathways based on category provided
* `get_phenotypes_for_taxon_using_get` - Get phenotype annotations submitted by RGD to AGR by taxonId
* `get_protein_interaction_count_using_get` - Count of protein interactions, for specified species and date
* `get_protein_interaction_diff_using_get` - Count difference of protein interactions, for specified species and date range
* `get_qtl_by_rgd_id_using_get` - Return a QTL for provided RGD ID
* `get_qtl_inheritance_type_count_using_get` - Count of strains, by qtl inheritance type, for specified species and date
* `get_qtl_inheritance_type_diff_using_get` - Count difference of strains, by qtl inheritance type, for specified species and date range
* `get_qtl_list_by_position_using_get` - Returns a list QTL for given position and assembly map
* `get_retired_object_count_using_get` - Count of retired objects by type, for specified species and date
* `get_retired_object_diff_using_get` - Count difference of retired objects, by type, for specified species and date range
* `get_species_types_using_get` - Return a Map of species type keys available in RGD
* `get_strain_by_rgd_id_using_get` - Return a strain by RGD ID
* `get_strain_type_count_using_get` - Count of strain types, for specified species and date
* `get_strain_type_diff_using_get` - Count difference of strain types, for specified species and date range
* `get_strains_by_position_using_get` - Return all active strains by position
* `get_term_acc_ids_using_get` - Returns a list ontology term accession IDs annotated to an rgd object
* `get_term_stats_using_get` - getTermStats
* `get_term_using_get` - Returns term for Accession ID
* `get_uni_prot_mapping_using_get` - Translate an RGD ID to a UniProt ID
* `get_uni_prot_mapping_using_post` - Translate RGD IDs to UniProt IDs
* `get_variants_for_taxon_using_get` - Get basic variant records submitted by RGD to AGR by taxonId
* `get_withdrawn_object_count_using_get` - Count of withdrawn objects by type, for specified species and date
* `get_withdrawn_object_diff_using_get` - Count difference of withdrawn objects, by type, for specified species and date range
* `get_xdbs_count_using_get` - Count of external database ids, for specied species and date
* `get_xdbs_diff_using_get` - Count difference of external database ids, for specified species and date range
* `is_descendant_of_using_get` - Returns true or false for terms
* `search_pathways_using_get` - Return a list of pathways based on search term

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
