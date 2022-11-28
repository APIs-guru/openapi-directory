import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadataInput } from "./fieldmetadata";
import { FieldMetadata } from "./fieldmetadata";



// NameInput
/** 
 * A person's name. If the name is a mononym, the family name is empty.
**/
export class NameInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=familyName" })
  familyName?: string;

  @SpeakeasyMetadata({ data: "json, name=givenName" })
  givenName?: string;

  @SpeakeasyMetadata({ data: "json, name=honorificPrefix" })
  honorificPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=honorificSuffix" })
  honorificSuffix?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadataInput;

  @SpeakeasyMetadata({ data: "json, name=middleName" })
  middleName?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneticFamilyName" })
  phoneticFamilyName?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneticFullName" })
  phoneticFullName?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneticGivenName" })
  phoneticGivenName?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneticHonorificPrefix" })
  phoneticHonorificPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneticHonorificSuffix" })
  phoneticHonorificSuffix?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneticMiddleName" })
  phoneticMiddleName?: string;

  @SpeakeasyMetadata({ data: "json, name=unstructuredName" })
  unstructuredName?: string;
}


// Name
/** 
 * A person's name. If the name is a mononym, the family name is empty.
**/
export class Name extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=displayNameLastFirst" })
  displayNameLastFirst?: string;

  @SpeakeasyMetadata({ data: "json, name=familyName" })
  familyName?: string;

  @SpeakeasyMetadata({ data: "json, name=givenName" })
  givenName?: string;

  @SpeakeasyMetadata({ data: "json, name=honorificPrefix" })
  honorificPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=honorificSuffix" })
  honorificSuffix?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @SpeakeasyMetadata({ data: "json, name=middleName" })
  middleName?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneticFamilyName" })
  phoneticFamilyName?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneticFullName" })
  phoneticFullName?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneticGivenName" })
  phoneticGivenName?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneticHonorificPrefix" })
  phoneticHonorificPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneticHonorificSuffix" })
  phoneticHonorificSuffix?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneticMiddleName" })
  phoneticMiddleName?: string;

  @SpeakeasyMetadata({ data: "json, name=unstructuredName" })
  unstructuredName?: string;
}
