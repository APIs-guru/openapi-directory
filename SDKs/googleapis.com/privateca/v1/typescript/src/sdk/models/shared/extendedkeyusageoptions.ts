import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExtendedKeyUsageOptions
/** 
 * KeyUsage.ExtendedKeyUsageOptions has fields that correspond to certain common OIDs that could be specified as an extended key usage value.
**/
export class ExtendedKeyUsageOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientAuth" })
  clientAuth?: boolean;

  @SpeakeasyMetadata({ data: "json, name=codeSigning" })
  codeSigning?: boolean;

  @SpeakeasyMetadata({ data: "json, name=emailProtection" })
  emailProtection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ocspSigning" })
  ocspSigning?: boolean;

  @SpeakeasyMetadata({ data: "json, name=serverAuth" })
  serverAuth?: boolean;

  @SpeakeasyMetadata({ data: "json, name=timeStamping" })
  timeStamping?: boolean;
}
