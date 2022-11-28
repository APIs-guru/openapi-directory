import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SecurityContext
/** 
 * Not supported by Cloud Run. SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext. When both are set, the values in SecurityContext take precedence.
**/
export class SecurityContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=runAsUser" })
  runAsUser?: number;
}
