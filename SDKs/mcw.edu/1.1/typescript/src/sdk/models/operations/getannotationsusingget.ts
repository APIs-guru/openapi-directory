import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAnnotationsUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accId" })
  accId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=includeChildren" })
  includeChildren: boolean;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetAnnotationsUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAnnotationsUsingGetPathParams;
}


export class GetAnnotationsUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
