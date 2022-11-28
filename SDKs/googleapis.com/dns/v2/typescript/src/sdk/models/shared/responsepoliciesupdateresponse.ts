import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResponseHeader } from "./responseheader";
import { ResponsePolicy } from "./responsepolicy";



export class ResponsePoliciesUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: ResponseHeader;

  @SpeakeasyMetadata({ data: "json, name=responsePolicy" })
  responsePolicy?: ResponsePolicy;
}
