import { SpeakeasyBase } from "../../../internal/utils";
import { AccountDetails } from "./accountdetails";
import { AppIntegrity } from "./appintegrity";
import { DeviceIntegrity } from "./deviceintegrity";
import { RequestDetails } from "./requestdetails";
import { TestingDetails } from "./testingdetails";
/**
 * Contains basic app information and integrity signals like device attestation and licensing details.
**/
export declare class TokenPayloadExternal extends SpeakeasyBase {
    accountDetails?: AccountDetails;
    appIntegrity?: AppIntegrity;
    deviceIntegrity?: DeviceIntegrity;
    requestDetails?: RequestDetails;
    testingDetails?: TestingDetails;
}
