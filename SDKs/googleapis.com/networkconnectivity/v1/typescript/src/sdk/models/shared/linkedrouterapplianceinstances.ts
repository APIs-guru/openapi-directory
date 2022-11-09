import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RouterApplianceInstance } from "./routerapplianceinstance";


// LinkedRouterApplianceInstances
/** 
 * A collection of router appliance instances. If you configure multiple router appliance instances to receive data from the same set of sites outside of Google Cloud, we recommend that you associate those instances with the same spoke.
**/
export class LinkedRouterApplianceInstances extends SpeakeasyBase {
  @Metadata({ data: "json, name=instances", elemType: shared.RouterApplianceInstance })
  instances?: RouterApplianceInstance[];

  @Metadata({ data: "json, name=siteToSiteDataTransfer" })
  siteToSiteDataTransfer?: boolean;
}
