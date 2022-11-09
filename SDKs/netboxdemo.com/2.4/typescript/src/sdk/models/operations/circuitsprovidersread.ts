import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CircuitsProvidersReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CircuitsProvidersReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CircuitsProvidersReadPathParams;
}


export class CircuitsProvidersReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  provider?: shared.Provider;

  @Metadata()
  statusCode: number;
}
