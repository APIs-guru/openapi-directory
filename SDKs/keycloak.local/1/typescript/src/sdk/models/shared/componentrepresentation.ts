import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MultivaluedHashMap } from "./multivaluedhashmap";


export class ComponentRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: MultivaluedHashMap;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parentId" })
  parentId?: string;

  @Metadata({ data: "json, name=providerId" })
  providerId?: string;

  @Metadata({ data: "json, name=providerType" })
  providerType?: string;

  @Metadata({ data: "json, name=subType" })
  subType?: string;
}
