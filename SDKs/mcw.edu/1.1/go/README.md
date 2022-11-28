# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.GetActiveObjectCountUsingGetRequest{
        PathParams: operations.GetActiveObjectCountUsingGetPathParams{
            DateYyyymmdd: "corporis",
            SpeciesTypeKey: 1343366322133149537,
        },
    }
    
    res, err := s.Sdk.GetActiveObjectCountUsingGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `GetActiveObjectCountUsingGet` - Count of active objects by type, for specified species and date
* `GetActiveObjectDiffUsingGet` - Count difference of active objects, by type, for specified species and date range
* `GetAffectedGenomicModelsUsingGet` - Get affected genomic models (rat strains with gene alleles) submitted by RGD to AGR by taxonId
* `GetAllAnnotatedGenesUsingGet` - Return a list of genes annotated to an ontology term
* `GetAllStrainsUsingGet` - Return all active strains in RGD
* `GetAllelesForTaxonUsingGet` - Get gene allele records submitted by RGD to AGR by taxonId
* `GetAnnotatedGenesUsingPost` - Return a list of genes annotated to an ontology term
* `GetAnnotationCountByAccIDAndObjectTypeUsingGet` - Returns annotation count for ontology accession ID and object type
* `GetAnnotationCountByAccIDAndSpeciesUsingGet` - Returns annotation count for ontology accession ID and speicies
* `GetAnnotationCountByAccIDUsingGet` - Returns annotation count for ontology accession ID
* `GetAnnotationsByAccIDAndRgdIDUsingGet` - Returns a list of annotations by RGD ID and ontology term accession ID
* `GetAnnotationsByRgdIDAndOntologyUsingGet` - Returns a list of annotations by RGD ID and ontology prefix
* `GetAnnotationsByRgdIDUsingGet` - Returns a list of annotations by RGD ID
* `GetAnnotationsUsingGet` - Returns a list annotations for an ontology term or a term and it's children
* `GetAnnotationsUsingPost` - Return a list of genes annotated to an ontology term
* `GetAnnotsByRefrerenceUsingGet` - Returns a list of annotations for a reference
* `GetChartInfoUsingGet` - Return a list of quantitative phenotypes values based on a combination of Clinical Measurement, Experimental Condition, Rat Strain, and/or Measurement Method ontology terms.  Results will be all records that match all terms submitted.  Ontology ids should be submitted as a comma delimited list (ex. RS:0000029,CMO:0000155,CMO:0000139).  Species type is an integer value (3=rat, 4=chinchilla).  Reference RGD ID for a study works like a filter.
* `GetChartInfoUsingGet1` - Return a list of quantitative phenotypes values based on a combination of Clinical Measurement, Experimental Condition, Rat Strain, and/or Measurement Method ontology terms.  Results will be all records that match all terms submitted.  Ontology ids should be submitted as a comma delimited list (ex. RS:0000029,CMO:0000155,CMO:0000139).  Species type is an integer value (3=rat, 4=chinchilla)
* `GetChromosomeByAssemblyUsingGet` - Return a list of chromosomes
* `GetChromosomesByAssemblyUsingGet` - Return a list of chromosomes
* `GetEnrichmentDataUsingPost` - Return a list of genes annotated to the term.Genes are rgdids separated by comma.Species type is an integer value.term is the ontology
* `GetEnrichmentDataUsingPost1` - Return a chart of ontology terms annotated to the genes.Genes are rgdids separated by comma.Species type is an integer value.Aspect is the Ontology group
* `GetEnsemblGeneMappingUsingGet` - Translate an RGD ID to an Ensembl Gene  ID
* `GetEnsemblGeneMappingUsingPost` - Translate RGD IDs to Ensembl Gene IDs
* `GetEnsemblProteinMappingUsingGet` - Translate an RGD ID to an Ensembl Protein ID
* `GetEnsemblProteinMappingUsingPost` - Translate RGD IDs to Ensembl Protein IDs
* `GetEnsemblTranscriptMappingUsingGet` - Translate an RGD ID to an Ensembl Transcript ID
* `GetEnsemblTranscriptMappingUsingPost` - Translate RGD IDs to Ensembl Transcript IDs
* `GetExpressionForTaxonUsingGet` - Get expression annotations submitted by RGD to AGR by taxonId
* `GetGtexMappingUsingGet` - Translate an RGD ID to an GTEx ID
* `GetGtexMappingUsingPost` - Translate RGD IDs to GTEx IDs
* `GetGenBankNucleotideMappingUsingGet` - Translate an RGD ID to a GenBank Nucleotide ID
* `GetGenBankNucleotideMappingUsingPost` - Translate RGD IDs to GenBank Nucleotide IDs
* `GetGenBankProteinMappingUsingGet` - Translate an RGD ID to a GenBank Protein ID
* `GetGenBankProteinMappingUsingPost` - Translate RGD IDs to GenBank Protein IDs
* `GetGeneAllelesUsingGet` - Return a list of gene alleles
* `GetGeneByMapKeyUsingGet` - Return a list of all genes with position information for an assembly
* `GetGeneByRgdIDUsingGet` - Get a gene record by RGD ID
* `GetGeneBySymbolUsingGet` - Get a gene record by symbol and species type key
* `GetGeneOrthologsUsingGet` - Return a list of gene orthologs
* `GetGeneTypeCountUsingGet` - Count of gene types, for specified species and date
* `GetGeneTypeDiffUsingGet` - Count difference of gene types, for specified species and date range
* `GetGeneTypesUsingGet` - Returns a list of gene types avialable in RGD
* `GetGenesAnnotatedUsingGet` - Return a list of genes annotated to an ontology term
* `GetGenesByAffyIDUsingGet` - Return a list of genes for an affymetrix ID
* `GetGenesByAliasSymbolUsingGet` - Return a list of genes for an alias and species
* `GetGenesByKeywordUsingGet` - Return a list of genes by keyword and species type key
* `GetGenesByPositionUsingGet` - Return a list of genes position and map key
* `GetGenesBySpeciesUsingGet` - Return a list of all genes for a species in RGD
* `GetGenesForLatestAssemblyUsingGet` - Get gene records submitted by RGD to AGR by taxonId
* `GetGenesInRegionUsingGet` - Return a list of genes in region
* `GetHgncMappingUsingGet` - Translate an RGD ID to an HGNC ID
* `GetHgncMappingUsingPost` - Translate RGD IDs to HGNC IDs
* `GetMgiMappingUsingGet` - Translate an RGD ID to an MGI ID
* `GetMgiMappingUsingPost` - Translate RGD IDs to MGI IDs
* `GetMappedGenesByPositionUsingGet` - Return a list of genes position and map key
* `GetMappedQtlByPositionUsingGet` - Returns a list QTL for given position and assembly map
* `GetMappedSslpByPositionUsingGet` - Returns a list SSLP for given position and assembly map
* `GetMapsBySpeciesUsingGet` - Return a list of assemblies
* `GetMapsUsingGet` - Return a list assembly maps for a species
* `GetMapsUsingGet1` - Return a standardUnit for an ontology if it exists
* `GetNcbiGeneMappingUsingGet` - Translate an RGD ID to an NCBI Gene ID
* `GetNcbiGeneMappingUsingPost` - Translate RGD IDs to NCBI Gene IDs
* `GetObjectStatusCountUsingGet` - Count of objects with given status, for specified species and date
* `GetObjectStatusDiffUsingGet` - Count difference of objects with given status, for specified species and date range
* `GetObjectsWithRefSeqCountUsingGet` - Count of objects with reference sequence(s), by object type, for specified species and date
* `GetObjectsWithRefSeqDiffUsingGet` - Count difference of objects with reference sequence(s), by object type, for specified species and date range
* `GetObjectsWithReferenceCountUsingGet` - Count of objects with reference, by object type, for specified species and date
* `GetObjectsWithReferenceDiffUsingGet` - Count difference of objects with reference, by object type, for specified species and date range
* `GetObjectsWithXdBsCountUsingGet` - Count of objects with external database ids, by database id, for specified species, object type and date
* `GetObjectsWithXdBsDiffUsingGet` - Count difference of objects with external database ids, by database id, for specified species, object type and date range
* `GetOntDagsUsingGet` - Returns child and parent terms for Accession ID
* `GetOrthologsByListUsingPost` - Return a list of gene orthologs
* `GetPathwaysWithDiagramsForCategoryUsingGet` - Return a list of pathways based on category provided
* `GetPhenotypesForTaxonUsingGet` - Get phenotype annotations submitted by RGD to AGR by taxonId
* `GetProteinInteractionCountUsingGet` - Count of protein interactions, for specified species and date
* `GetProteinInteractionDiffUsingGet` - Count difference of protein interactions, for specified species and date range
* `GetQtlByRgdIDUsingGet` - Return a QTL for provided RGD ID
* `GetQtlInheritanceTypeCountUsingGet` - Count of strains, by qtl inheritance type, for specified species and date
* `GetQtlInheritanceTypeDiffUsingGet` - Count difference of strains, by qtl inheritance type, for specified species and date range
* `GetQtlListByPositionUsingGet` - Returns a list QTL for given position and assembly map
* `GetRetiredObjectCountUsingGet` - Count of retired objects by type, for specified species and date
* `GetRetiredObjectDiffUsingGet` - Count difference of retired objects, by type, for specified species and date range
* `GetSpeciesTypesUsingGet` - Return a Map of species type keys available in RGD
* `GetStrainByRgdIDUsingGet` - Return a strain by RGD ID
* `GetStrainTypeCountUsingGet` - Count of strain types, for specified species and date
* `GetStrainTypeDiffUsingGet` - Count difference of strain types, for specified species and date range
* `GetStrainsByPositionUsingGet` - Return all active strains by position
* `GetTermAccIdsUsingGet` - Returns a list ontology term accession IDs annotated to an rgd object
* `GetTermStatsUsingGet` - getTermStats
* `GetTermUsingGet` - Returns term for Accession ID
* `GetUniProtMappingUsingGet` - Translate an RGD ID to a UniProt ID
* `GetUniProtMappingUsingPost` - Translate RGD IDs to UniProt IDs
* `GetVariantsForTaxonUsingGet` - Get basic variant records submitted by RGD to AGR by taxonId
* `GetWithdrawnObjectCountUsingGet` - Count of withdrawn objects by type, for specified species and date
* `GetWithdrawnObjectDiffUsingGet` - Count difference of withdrawn objects, by type, for specified species and date range
* `GetXdbsCountUsingGet` - Count of external database ids, for specied species and date
* `GetXdbsDiffUsingGet` - Count difference of external database ids, for specified species and date range
* `IsDescendantOfUsingGet` - Returns true or false for terms
* `SearchPathwaysUsingGet` - Return a list of pathways based on search term

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
