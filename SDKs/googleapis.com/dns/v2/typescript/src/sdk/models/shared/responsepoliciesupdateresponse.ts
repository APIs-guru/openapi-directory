import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResponseHeader } from "./responseheader";
import { ResponsePolicy } from "./responsepolicy";


export class ResponsePoliciesUpdateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=header" })
  header?: ResponseHeader;

  @Metadata({ data: "json, name=responsePolicy" })
  responsePolicy?: ResponsePolicy;
}
