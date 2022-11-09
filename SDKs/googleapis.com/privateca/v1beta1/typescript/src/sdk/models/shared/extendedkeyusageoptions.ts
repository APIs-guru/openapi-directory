import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExtendedKeyUsageOptions
/** 
 * KeyUsage.ExtendedKeyUsageOptions has fields that correspond to certain common OIDs that could be specified as an extended key usage value.
**/
export class ExtendedKeyUsageOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientAuth" })
  clientAuth?: boolean;

  @Metadata({ data: "json, name=codeSigning" })
  codeSigning?: boolean;

  @Metadata({ data: "json, name=emailProtection" })
  emailProtection?: boolean;

  @Metadata({ data: "json, name=ocspSigning" })
  ocspSigning?: boolean;

  @Metadata({ data: "json, name=serverAuth" })
  serverAuth?: boolean;

  @Metadata({ data: "json, name=timeStamping" })
  timeStamping?: boolean;
}
