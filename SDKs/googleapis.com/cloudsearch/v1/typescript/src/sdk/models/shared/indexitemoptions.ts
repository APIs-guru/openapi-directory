import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IndexItemOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowUnknownGsuitePrincipals" })
  allowUnknownGsuitePrincipals?: boolean;
}
