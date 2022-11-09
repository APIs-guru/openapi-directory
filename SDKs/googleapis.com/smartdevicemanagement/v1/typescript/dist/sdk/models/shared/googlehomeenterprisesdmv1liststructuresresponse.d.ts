import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleHomeEnterpriseSdmV1Structure } from "./googlehomeenterprisesdmv1structure";
/**
 * Response message for SmartDeviceManagementService.ListStructures
**/
export declare class GoogleHomeEnterpriseSdmV1ListStructuresResponse extends SpeakeasyBase {
    nextPageToken?: string;
    structures?: GoogleHomeEnterpriseSdmV1Structure[];
}
