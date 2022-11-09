import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class IndexItemOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowUnknownGsuitePrincipals" })
  allowUnknownGsuitePrincipals?: boolean;
}
