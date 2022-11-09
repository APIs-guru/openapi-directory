import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Endpoint
/** 
 * An individual endpoint that provides a service. The service must already exist to create an endpoint.
**/
export class Endpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;
}
