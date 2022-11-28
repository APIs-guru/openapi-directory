import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Map extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbsnpVersion?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  key?: number;

  @SpeakeasyMetadata()
  methodKey?: number;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  notes?: string;

  @SpeakeasyMetadata()
  primaryRefAssembly?: boolean;

  @SpeakeasyMetadata()
  rank?: number;

  @SpeakeasyMetadata()
  refSeqAssemblyAcc?: string;

  @SpeakeasyMetadata()
  refSeqAssemblyName?: string;

  @SpeakeasyMetadata()
  rgdId?: number;

  @SpeakeasyMetadata()
  source?: string;

  @SpeakeasyMetadata()
  speciesTypeKey?: number;

  @SpeakeasyMetadata()
  ucscAssemblyId?: string;

  @SpeakeasyMetadata()
  unit?: string;

  @SpeakeasyMetadata()
  version?: string;
}
