import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FieldMetadata } from "./fieldmetadata";


// Name
/** 
 * A person's name. If the name is a mononym, the family name is empty.
**/
export class Name extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=displayNameLastFirst" })
  displayNameLastFirst?: string;

  @Metadata({ data: "json, name=familyName" })
  familyName?: string;

  @Metadata({ data: "json, name=givenName" })
  givenName?: string;

  @Metadata({ data: "json, name=honorificPrefix" })
  honorificPrefix?: string;

  @Metadata({ data: "json, name=honorificSuffix" })
  honorificSuffix?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @Metadata({ data: "json, name=middleName" })
  middleName?: string;

  @Metadata({ data: "json, name=phoneticFamilyName" })
  phoneticFamilyName?: string;

  @Metadata({ data: "json, name=phoneticFullName" })
  phoneticFullName?: string;

  @Metadata({ data: "json, name=phoneticGivenName" })
  phoneticGivenName?: string;

  @Metadata({ data: "json, name=phoneticHonorificPrefix" })
  phoneticHonorificPrefix?: string;

  @Metadata({ data: "json, name=phoneticHonorificSuffix" })
  phoneticHonorificSuffix?: string;

  @Metadata({ data: "json, name=phoneticMiddleName" })
  phoneticMiddleName?: string;

  @Metadata({ data: "json, name=unstructuredName" })
  unstructuredName?: string;
}
