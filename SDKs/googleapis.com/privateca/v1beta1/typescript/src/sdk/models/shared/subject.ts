import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Subject
/** 
 * Subject describes parts of a distinguished name that, in turn, describes the subject of the certificate.
**/
export class Subject extends SpeakeasyBase {
  @Metadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @Metadata({ data: "json, name=locality" })
  locality?: string;

  @Metadata({ data: "json, name=organization" })
  organization?: string;

  @Metadata({ data: "json, name=organizationalUnit" })
  organizationalUnit?: string;

  @Metadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=province" })
  province?: string;

  @Metadata({ data: "json, name=streetAddress" })
  streetAddress?: string;
}
