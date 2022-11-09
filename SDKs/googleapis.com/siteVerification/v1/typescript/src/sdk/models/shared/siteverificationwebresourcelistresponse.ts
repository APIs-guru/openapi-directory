import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SiteVerificationWebResourceResource } from "./siteverificationwebresourceresource";


export class SiteVerificationWebResourceListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.SiteVerificationWebResourceResource })
  items?: SiteVerificationWebResourceResource[];
}
