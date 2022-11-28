import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NiResponseXmlBasicError
/** 
 * The error code and status of your request
**/
export class NiResponseXmlBasicError extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: string;

  @SpeakeasyMetadata()
  statusText?: string;
}


// NiResponseXmlBasicLocalNumber
/** 
 * An object containing the `number` in your request in the format used by the country the number belongs to.
**/
export class NiResponseXmlBasicLocalNumber extends SpeakeasyBase {
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


// NiResponseXmlBasic
/** 
 * Basic
**/
export class NiResponseXmlBasic extends SpeakeasyBase {
  @SpeakeasyMetadata()
  error?: NiResponseXmlBasicError;

  @SpeakeasyMetadata()
  internationalFormatNumber?: string;

  @SpeakeasyMetadata()
  localNumber?: NiResponseXmlBasicLocalNumber;

  @SpeakeasyMetadata()
  requestId?: string;
}
