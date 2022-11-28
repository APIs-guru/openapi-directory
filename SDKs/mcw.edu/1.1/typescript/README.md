# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { GetActiveObjectCountUsingGetRequest, GetActiveObjectCountUsingGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetActiveObjectCountUsingGetRequest = {
  pathParams: {
    dateYyyymmdd: "corporis",
    speciesTypeKey: 1343366322133149537,
  },
};

sdk.sdk.getActiveObjectCountUsingGet(req).then((res: GetActiveObjectCountUsingGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `getActiveObjectCountUsingGet` - Count of active objects by type, for specified species and date
* `getActiveObjectDiffUsingGet` - Count difference of active objects, by type, for specified species and date range
* `getAffectedGenomicModelsUsingGet` - Get affected genomic models (rat strains with gene alleles) submitted by RGD to AGR by taxonId
* `getAllAnnotatedGenesUsingGet` - Return a list of genes annotated to an ontology term
* `getAllStrainsUsingGet` - Return all active strains in RGD
* `getAllelesForTaxonUsingGet` - Get gene allele records submitted by RGD to AGR by taxonId
* `getAnnotatedGenesUsingPost` - Return a list of genes annotated to an ontology term
* `getAnnotationCountByAccIdAndObjectTypeUsingGet` - Returns annotation count for ontology accession ID and object type
* `getAnnotationCountByAccIdAndSpeciesUsingGet` - Returns annotation count for ontology accession ID and speicies
* `getAnnotationCountByAccIdUsingGet` - Returns annotation count for ontology accession ID
* `getAnnotationsByAccIdAndRgdIdUsingGet` - Returns a list of annotations by RGD ID and ontology term accession ID
* `getAnnotationsByRgdIdAndOntologyUsingGet` - Returns a list of annotations by RGD ID and ontology prefix
* `getAnnotationsByRgdIdUsingGet` - Returns a list of annotations by RGD ID
* `getAnnotationsUsingGet` - Returns a list annotations for an ontology term or a term and it's children
* `getAnnotationsUsingPost` - Return a list of genes annotated to an ontology term
* `getAnnotsByRefrerenceUsingGet` - Returns a list of annotations for a reference
* `getChartInfoUsingGet` - Return a list of quantitative phenotypes values based on a combination of Clinical Measurement, Experimental Condition, Rat Strain, and/or Measurement Method ontology terms.  Results will be all records that match all terms submitted.  Ontology ids should be submitted as a comma delimited list (ex. RS:0000029,CMO:0000155,CMO:0000139).  Species type is an integer value (3=rat, 4=chinchilla).  Reference RGD ID for a study works like a filter.
* `getChartInfoUsingGet1` - Return a list of quantitative phenotypes values based on a combination of Clinical Measurement, Experimental Condition, Rat Strain, and/or Measurement Method ontology terms.  Results will be all records that match all terms submitted.  Ontology ids should be submitted as a comma delimited list (ex. RS:0000029,CMO:0000155,CMO:0000139).  Species type is an integer value (3=rat, 4=chinchilla)
* `getChromosomeByAssemblyUsingGet` - Return a list of chromosomes
* `getChromosomesByAssemblyUsingGet` - Return a list of chromosomes
* `getEnrichmentDataUsingPost` - Return a list of genes annotated to the term.Genes are rgdids separated by comma.Species type is an integer value.term is the ontology
* `getEnrichmentDataUsingPost1` - Return a chart of ontology terms annotated to the genes.Genes are rgdids separated by comma.Species type is an integer value.Aspect is the Ontology group
* `getEnsemblGeneMappingUsingGet` - Translate an RGD ID to an Ensembl Gene  ID
* `getEnsemblGeneMappingUsingPost` - Translate RGD IDs to Ensembl Gene IDs
* `getEnsemblProteinMappingUsingGet` - Translate an RGD ID to an Ensembl Protein ID
* `getEnsemblProteinMappingUsingPost` - Translate RGD IDs to Ensembl Protein IDs
* `getEnsemblTranscriptMappingUsingGet` - Translate an RGD ID to an Ensembl Transcript ID
* `getEnsemblTranscriptMappingUsingPost` - Translate RGD IDs to Ensembl Transcript IDs
* `getExpressionForTaxonUsingGet` - Get expression annotations submitted by RGD to AGR by taxonId
* `getGtexMappingUsingGet` - Translate an RGD ID to an GTEx ID
* `getGtexMappingUsingPost` - Translate RGD IDs to GTEx IDs
* `getGenBankNucleotideMappingUsingGet` - Translate an RGD ID to a GenBank Nucleotide ID
* `getGenBankNucleotideMappingUsingPost` - Translate RGD IDs to GenBank Nucleotide IDs
* `getGenBankProteinMappingUsingGet` - Translate an RGD ID to a GenBank Protein ID
* `getGenBankProteinMappingUsingPost` - Translate RGD IDs to GenBank Protein IDs
* `getGeneAllelesUsingGet` - Return a list of gene alleles
* `getGeneByMapKeyUsingGet` - Return a list of all genes with position information for an assembly
* `getGeneByRgdIdUsingGet` - Get a gene record by RGD ID
* `getGeneBySymbolUsingGet` - Get a gene record by symbol and species type key
* `getGeneOrthologsUsingGet` - Return a list of gene orthologs
* `getGeneTypeCountUsingGet` - Count of gene types, for specified species and date
* `getGeneTypeDiffUsingGet` - Count difference of gene types, for specified species and date range
* `getGeneTypesUsingGet` - Returns a list of gene types avialable in RGD
* `getGenesAnnotatedUsingGet` - Return a list of genes annotated to an ontology term
* `getGenesByAffyIdUsingGet` - Return a list of genes for an affymetrix ID
* `getGenesByAliasSymbolUsingGet` - Return a list of genes for an alias and species
* `getGenesByKeywordUsingGet` - Return a list of genes by keyword and species type key
* `getGenesByPositionUsingGet` - Return a list of genes position and map key
* `getGenesBySpeciesUsingGet` - Return a list of all genes for a species in RGD
* `getGenesForLatestAssemblyUsingGet` - Get gene records submitted by RGD to AGR by taxonId
* `getGenesInRegionUsingGet` - Return a list of genes in region
* `getHgncMappingUsingGet` - Translate an RGD ID to an HGNC ID
* `getHgncMappingUsingPost` - Translate RGD IDs to HGNC IDs
* `getMgiMappingUsingGet` - Translate an RGD ID to an MGI ID
* `getMgiMappingUsingPost` - Translate RGD IDs to MGI IDs
* `getMappedGenesByPositionUsingGet` - Return a list of genes position and map key
* `getMappedQtlByPositionUsingGet` - Returns a list QTL for given position and assembly map
* `getMappedSslpByPositionUsingGet` - Returns a list SSLP for given position and assembly map
* `getMapsBySpeciesUsingGet` - Return a list of assemblies
* `getMapsUsingGet` - Return a list assembly maps for a species
* `getMapsUsingGet1` - Return a standardUnit for an ontology if it exists
* `getNcbiGeneMappingUsingGet` - Translate an RGD ID to an NCBI Gene ID
* `getNcbiGeneMappingUsingPost` - Translate RGD IDs to NCBI Gene IDs
* `getObjectStatusCountUsingGet` - Count of objects with given status, for specified species and date
* `getObjectStatusDiffUsingGet` - Count difference of objects with given status, for specified species and date range
* `getObjectsWithRefSeqCountUsingGet` - Count of objects with reference sequence(s), by object type, for specified species and date
* `getObjectsWithRefSeqDiffUsingGet` - Count difference of objects with reference sequence(s), by object type, for specified species and date range
* `getObjectsWithReferenceCountUsingGet` - Count of objects with reference, by object type, for specified species and date
* `getObjectsWithReferenceDiffUsingGet` - Count difference of objects with reference, by object type, for specified species and date range
* `getObjectsWithXdBsCountUsingGet` - Count of objects with external database ids, by database id, for specified species, object type and date
* `getObjectsWithXdBsDiffUsingGet` - Count difference of objects with external database ids, by database id, for specified species, object type and date range
* `getOntDagsUsingGet` - Returns child and parent terms for Accession ID
* `getOrthologsByListUsingPost` - Return a list of gene orthologs
* `getPathwaysWithDiagramsForCategoryUsingGet` - Return a list of pathways based on category provided
* `getPhenotypesForTaxonUsingGet` - Get phenotype annotations submitted by RGD to AGR by taxonId
* `getProteinInteractionCountUsingGet` - Count of protein interactions, for specified species and date
* `getProteinInteractionDiffUsingGet` - Count difference of protein interactions, for specified species and date range
* `getQtlByRgdIdUsingGet` - Return a QTL for provided RGD ID
* `getQtlInheritanceTypeCountUsingGet` - Count of strains, by qtl inheritance type, for specified species and date
* `getQtlInheritanceTypeDiffUsingGet` - Count difference of strains, by qtl inheritance type, for specified species and date range
* `getQtlListByPositionUsingGet` - Returns a list QTL for given position and assembly map
* `getRetiredObjectCountUsingGet` - Count of retired objects by type, for specified species and date
* `getRetiredObjectDiffUsingGet` - Count difference of retired objects, by type, for specified species and date range
* `getSpeciesTypesUsingGet` - Return a Map of species type keys available in RGD
* `getStrainByRgdIdUsingGet` - Return a strain by RGD ID
* `getStrainTypeCountUsingGet` - Count of strain types, for specified species and date
* `getStrainTypeDiffUsingGet` - Count difference of strain types, for specified species and date range
* `getStrainsByPositionUsingGet` - Return all active strains by position
* `getTermAccIdsUsingGet` - Returns a list ontology term accession IDs annotated to an rgd object
* `getTermStatsUsingGet` - getTermStats
* `getTermUsingGet` - Returns term for Accession ID
* `getUniProtMappingUsingGet` - Translate an RGD ID to a UniProt ID
* `getUniProtMappingUsingPost` - Translate RGD IDs to UniProt IDs
* `getVariantsForTaxonUsingGet` - Get basic variant records submitted by RGD to AGR by taxonId
* `getWithdrawnObjectCountUsingGet` - Count of withdrawn objects by type, for specified species and date
* `getWithdrawnObjectDiffUsingGet` - Count difference of withdrawn objects, by type, for specified species and date range
* `getXdbsCountUsingGet` - Count of external database ids, for specied species and date
* `getXdbsDiffUsingGet` - Count difference of external database ids, for specified species and date range
* `isDescendantOfUsingGet` - Returns true or false for terms
* `searchPathwaysUsingGet` - Return a list of pathways based on search term

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
