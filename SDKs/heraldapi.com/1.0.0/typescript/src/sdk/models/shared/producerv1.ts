import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProducerV1
/** 
 * Producers are the entities that represent customers to institutions.
**/
export class ProducerV1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=external_id" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
