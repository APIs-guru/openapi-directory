import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NiCurrentCarrierProperties } from "./nicurrentcarrierproperties";
import { NiInitialCarrierProperties } from "./niinitialcarrierproperties";
import { NiRoaming } from "./niroaming";


export enum NiResponseXmlAdvancedCallerTypeEnum {
    Business = "business",
    Consumer = "consumer",
    Unknown = "unknown"
}


// NiResponseXmlAdvancedError
/** 
 * The error code and status of your request
**/
export class NiResponseXmlAdvancedError extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: string;

  @SpeakeasyMetadata()
  statusText?: string;
}


// NiResponseXmlAdvancedLocalNumber
/** 
 * An object containing the `number` in your request in the format used by the country the number belongs to.
**/
export class NiResponseXmlAdvancedLocalNumber extends SpeakeasyBase {
  @SpeakeasyMetadata()
  countryCode?: string;

  @SpeakeasyMetadata()
  countryCodeIso3?: string;

  @SpeakeasyMetadata()
  countryName?: string;

  @SpeakeasyMetadata()
  countryPrefix?: string;

  @SpeakeasyMetadata()
  number?: string;
}


// NiResponseXmlAdvancedLookupOutcome
/** 
 * An object indicating whether all information about a phone number has been returned.
**/
export class NiResponseXmlAdvancedLookupOutcome extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: any;

  @SpeakeasyMetadata()
  lookupOutcomeMessage?: string;
}

export enum NiResponseXmlAdvancedReachableEnum {
    Unknown = "unknown",
    Reachable = "reachable",
    Undeliverable = "undeliverable",
    Absent = "absent",
    BadNumber = "bad_number",
    Blacklisted = "blacklisted",
    Null = "null"
}

export enum NiResponseXmlAdvancedValidNumberEnum {
    Unknown = "unknown",
    Valid = "valid",
    NotValid = "not_valid",
    InferredNotValid = "inferred_not_valid"
}


// NiResponseXmlAdvanced
/** 
 * Advanced
**/
export class NiResponseXmlAdvanced extends SpeakeasyBase {
  @SpeakeasyMetadata()
  callerIdentity?: any;

  @SpeakeasyMetadata()
  callerName?: string;

  @SpeakeasyMetadata()
  callerType?: NiResponseXmlAdvancedCallerTypeEnum;

  @SpeakeasyMetadata()
  currentCarrier?: NiCurrentCarrierProperties;

  @SpeakeasyMetadata()
  error?: NiResponseXmlAdvancedError;

  @SpeakeasyMetadata()
  firsName?: string;

  @SpeakeasyMetadata()
  internationalFormatNumber?: string;

  @SpeakeasyMetadata()
  ipWarnings?: string;

  @SpeakeasyMetadata()
  lastName?: string;

  @SpeakeasyMetadata()
  localNumber?: NiResponseXmlAdvancedLocalNumber;

  @SpeakeasyMetadata()
  lookupOutcome?: NiResponseXmlAdvancedLookupOutcome;

  @SpeakeasyMetadata()
  originalCarrier?: NiInitialCarrierProperties;

  @SpeakeasyMetadata()
  ported?: any;

  @SpeakeasyMetadata()
  reachable?: NiResponseXmlAdvancedReachableEnum;

  @SpeakeasyMetadata()
  remainingBalance?: string;

  @SpeakeasyMetadata()
  requestId?: string;

  @SpeakeasyMetadata()
  requestPrice?: string;

  @SpeakeasyMetadata()
  roaming?: NiRoaming;

  @SpeakeasyMetadata()
  validNumber?: NiResponseXmlAdvancedValidNumberEnum;
}
