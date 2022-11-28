import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MultivaluedHashMap } from "./multivaluedhashmap";



export class ComponentRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: MultivaluedHashMap;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentId" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "json, name=providerId" })
  providerId?: string;

  @SpeakeasyMetadata({ data: "json, name=providerType" })
  providerType?: string;

  @SpeakeasyMetadata({ data: "json, name=subType" })
  subType?: string;
}
