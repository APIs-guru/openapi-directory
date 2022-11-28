import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Sslp } from "./sslp";



export class MappedSslp extends SpeakeasyBase {
  @SpeakeasyMetadata()
  chromosome?: string;

  @SpeakeasyMetadata()
  mapKey?: number;

  @SpeakeasyMetadata()
  sslp?: Sslp;

  @SpeakeasyMetadata()
  start?: number;

  @SpeakeasyMetadata()
  stop?: number;

  @SpeakeasyMetadata()
  strand?: string;
}
