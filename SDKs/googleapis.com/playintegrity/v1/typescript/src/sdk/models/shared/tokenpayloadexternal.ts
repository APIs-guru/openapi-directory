import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=accountDetails" })
  accountDetails?: AccountDetails;

  @SpeakeasyMetadata({ data: "json, name=appIntegrity" })
  appIntegrity?: AppIntegrity;

  @SpeakeasyMetadata({ data: "json, name=deviceIntegrity" })
  deviceIntegrity?: DeviceIntegrity;

  @SpeakeasyMetadata({ data: "json, name=requestDetails" })
  requestDetails?: RequestDetails;

  @SpeakeasyMetadata({ data: "json, name=testingDetails" })
  testingDetails?: TestingDetails;
}
