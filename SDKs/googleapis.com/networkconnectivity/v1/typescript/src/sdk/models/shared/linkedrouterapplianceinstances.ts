import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RouterApplianceInstance } from "./routerapplianceinstance";



// LinkedRouterApplianceInstances
/** 
 * A collection of router appliance instances. If you configure multiple router appliance instances to receive data from the same set of sites outside of Google Cloud, we recommend that you associate those instances with the same spoke.
**/
export class LinkedRouterApplianceInstances extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instances", elemType: RouterApplianceInstance })
  instances?: RouterApplianceInstance[];

  @SpeakeasyMetadata({ data: "json, name=siteToSiteDataTransfer" })
  siteToSiteDataTransfer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=vpcNetwork" })
  vpcNetwork?: string;
}


// LinkedRouterApplianceInstancesInput
/** 
 * A collection of router appliance instances. If you configure multiple router appliance instances to receive data from the same set of sites outside of Google Cloud, we recommend that you associate those instances with the same spoke.
**/
export class LinkedRouterApplianceInstancesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instances", elemType: RouterApplianceInstance })
  instances?: RouterApplianceInstance[];

  @SpeakeasyMetadata({ data: "json, name=siteToSiteDataTransfer" })
  siteToSiteDataTransfer?: boolean;
}
