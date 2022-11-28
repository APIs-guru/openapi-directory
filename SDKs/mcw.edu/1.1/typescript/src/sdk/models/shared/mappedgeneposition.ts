import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MappedGenePosition extends SpeakeasyBase {
  @SpeakeasyMetadata()
  chromosome?: string;

  @SpeakeasyMetadata()
  mapKey?: number;

  @SpeakeasyMetadata()
  rgdId?: number;

  @SpeakeasyMetadata()
  start?: number;

  @SpeakeasyMetadata()
  stop?: number;

  @SpeakeasyMetadata()
  strand?: string;

  @SpeakeasyMetadata()
  symbol?: string;
}
