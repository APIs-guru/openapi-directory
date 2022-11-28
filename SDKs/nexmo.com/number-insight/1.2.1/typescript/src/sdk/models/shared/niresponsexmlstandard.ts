import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NiInitialCarrierProperties } from "./niinitialcarrierproperties";


export enum NiResponseXmlStandardCallerIdentityCallerTypeEnum {
    Business = "business",
    Consumer = "consumer",
    Unknown = "unknown"
}


// NiResponseXmlStandardCallerIdentity
/** 
 * Contains details of the number owner, if `cnam` was set to `true` in the request.
**/
export class NiResponseXmlStandardCallerIdentity extends SpeakeasyBase {
  @SpeakeasyMetadata()
  callerName?: string;

  @SpeakeasyMetadata()
  callerType?: NiResponseXmlStandardCallerIdentityCallerTypeEnum;

  @SpeakeasyMetadata()
  callerName1?: string;

  @SpeakeasyMetadata()
  callerType1?: NiResponseXmlStandardCallerIdentityCallerTypeEnum;

  @SpeakeasyMetadata()
  firsName?: string;

  @SpeakeasyMetadata()
  firstName?: string;

  @SpeakeasyMetadata()
  lastName?: string;

  @SpeakeasyMetadata()
  lastName1?: string;
}

export enum NiResponseXmlStandardCurrentCarrierNetworkTypeEnum {
    Mobile = "mobile",
    Landline = "landline",
    LandlinePremium = "landline_premium",
    LandlineTollfree = "landline_tollfree",
    Virtual = "virtual",
    Unknown = "unknown",
    Pager = "pager",
    Null = "null"
}


export class NiResponseXmlStandardCurrentCarrier extends SpeakeasyBase {
  @SpeakeasyMetadata()
  country?: string;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  networkCode?: string;

  @SpeakeasyMetadata()
  networkType?: NiResponseXmlStandardCurrentCarrierNetworkTypeEnum;
}


// NiResponseXmlStandardError
/** 
 * The error code and status of your request
**/
export class NiResponseXmlStandardError extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: string;

  @SpeakeasyMetadata()
  statusText?: string;
}


// NiResponseXmlStandardLocalNumber
/** 
 * An object containing the `number` in your request in the format used by the country the number belongs to.
**/
export class NiResponseXmlStandardLocalNumber extends SpeakeasyBase {
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


// NiResponseXmlStandard
/** 
 * Standard
**/
export class NiResponseXmlStandard extends SpeakeasyBase {
  @SpeakeasyMetadata()
  callerIdentity?: NiResponseXmlStandardCallerIdentity;

  @SpeakeasyMetadata()
  currentCarrier?: NiResponseXmlStandardCurrentCarrier;

  @SpeakeasyMetadata()
  error?: NiResponseXmlStandardError;

  @SpeakeasyMetadata()
  internationalFormatNumber?: string;

  @SpeakeasyMetadata()
  localNumber?: NiResponseXmlStandardLocalNumber;

  @SpeakeasyMetadata()
  originalCarrier?: NiInitialCarrierProperties;

  @SpeakeasyMetadata()
  ported?: any;

  @SpeakeasyMetadata()
  remainingBalance?: string;

  @SpeakeasyMetadata()
  requestId?: string;

  @SpeakeasyMetadata()
  requestPrice?: string;
}
