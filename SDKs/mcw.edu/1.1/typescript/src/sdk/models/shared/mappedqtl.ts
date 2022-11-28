import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Qtl } from "./qtl";



export class MappedQtl extends SpeakeasyBase {
  @SpeakeasyMetadata()
  chromosome?: string;

  @SpeakeasyMetadata()
  mapKey?: number;

  @SpeakeasyMetadata()
  qtl?: Qtl;

  @SpeakeasyMetadata()
  start?: number;

  @SpeakeasyMetadata()
  stop?: number;

  @SpeakeasyMetadata()
  strand?: string;
}
