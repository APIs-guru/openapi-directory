import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Subject
/** 
 * Subject describes parts of a distinguished name that, in turn, describes the subject of the certificate.
**/
export class Subject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commonName" })
  commonName?: string;

  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=locality" })
  locality?: string;

  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: string;

  @SpeakeasyMetadata({ data: "json, name=organizationalUnit" })
  organizationalUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=province" })
  province?: string;

  @SpeakeasyMetadata({ data: "json, name=streetAddress" })
  streetAddress?: string;
}
