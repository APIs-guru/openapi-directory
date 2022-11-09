import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GcipSettings
/** 
 * Allows customers to configure tenant_id for GCIP instance per-app.
**/
export class GcipSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=loginPageUri" })
  loginPageUri?: string;

  @Metadata({ data: "json, name=tenantIds" })
  tenantIds?: string[];
}
