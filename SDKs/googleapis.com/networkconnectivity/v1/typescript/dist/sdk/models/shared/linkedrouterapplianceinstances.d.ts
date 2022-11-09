import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RouterApplianceInstance } from "./routerapplianceinstance";
/**
 * A collection of router appliance instances. If you configure multiple router appliance instances to receive data from the same set of sites outside of Google Cloud, we recommend that you associate those instances with the same spoke.
**/
export declare class LinkedRouterApplianceInstances extends SpeakeasyBase {
    instances?: RouterApplianceInstance[];
    siteToSiteDataTransfer?: boolean;
}
