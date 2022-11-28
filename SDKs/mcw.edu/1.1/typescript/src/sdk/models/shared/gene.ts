import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Gene extends SpeakeasyBase {
  @SpeakeasyMetadata()
  agrDescription?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  ensemblFullName?: string;

  @SpeakeasyMetadata()
  ensemblGeneSymbol?: string;

  @SpeakeasyMetadata()
  ensemblGeneType?: string;

  @SpeakeasyMetadata()
  geneSource?: string;

  @SpeakeasyMetadata()
  key?: number;

  @SpeakeasyMetadata()
  mergedDescription?: string;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  ncbiAnnotStatus?: string;

  @SpeakeasyMetadata()
  nomenReviewDate?: Date;

  @SpeakeasyMetadata()
  nomenSource?: string;

  @SpeakeasyMetadata()
  notes?: string;

  @SpeakeasyMetadata()
  refSeqStatus?: string;

  @SpeakeasyMetadata()
  rgdId?: number;

  @SpeakeasyMetadata()
  soAccId?: string;

  @SpeakeasyMetadata()
  speciesTypeKey?: number;

  @SpeakeasyMetadata()
  symbol?: string;

  @SpeakeasyMetadata()
  type?: string;

  @SpeakeasyMetadata()
  variant?: boolean;
}
