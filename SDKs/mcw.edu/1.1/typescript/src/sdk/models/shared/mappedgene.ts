import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Gene } from "./gene";



export class MappedGene extends SpeakeasyBase {
  @SpeakeasyMetadata()
  chromosome?: string;

  @SpeakeasyMetadata()
  gene?: Gene;

  @SpeakeasyMetadata()
  mapKey?: number;

  @SpeakeasyMetadata()
  start?: number;

  @SpeakeasyMetadata()
  stop?: number;

  @SpeakeasyMetadata()
  strand?: string;
}
