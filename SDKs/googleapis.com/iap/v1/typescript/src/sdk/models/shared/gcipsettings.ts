import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GcipSettings
/** 
 * Allows customers to configure tenant_id for GCIP instance per-app.
**/
export class GcipSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=loginPageUri" })
  loginPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=tenantIds" })
  tenantIds?: string[];
}
