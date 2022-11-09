import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountDetails } from "./accountdetails";
import { AppIntegrity } from "./appintegrity";
import { DeviceIntegrity } from "./deviceintegrity";
import { RequestDetails } from "./requestdetails";
import { TestingDetails } from "./testingdetails";


// TokenPayloadExternal
/** 
 * Contains basic app information and integrity signals like device attestation and licensing details.
**/
export class TokenPayloadExternal extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountDetails" })
  accountDetails?: AccountDetails;

  @Metadata({ data: "json, name=appIntegrity" })
  appIntegrity?: AppIntegrity;

  @Metadata({ data: "json, name=deviceIntegrity" })
  deviceIntegrity?: DeviceIntegrity;

  @Metadata({ data: "json, name=requestDetails" })
  requestDetails?: RequestDetails;

  @Metadata({ data: "json, name=testingDetails" })
  testingDetails?: TestingDetails;
}
