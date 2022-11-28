import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: string;
}


export class DeleteTagHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class DeleteTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteTagPathParams;

  @SpeakeasyMetadata()
  headers: DeleteTagHeaders;
}


export class DeleteTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
