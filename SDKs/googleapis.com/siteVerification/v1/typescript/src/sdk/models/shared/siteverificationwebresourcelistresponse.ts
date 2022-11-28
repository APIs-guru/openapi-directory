import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SiteVerificationWebResourceResource } from "./siteverificationwebresourceresource";



export class SiteVerificationWebResourceListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: SiteVerificationWebResourceResource })
  items?: SiteVerificationWebResourceResource[];
}
