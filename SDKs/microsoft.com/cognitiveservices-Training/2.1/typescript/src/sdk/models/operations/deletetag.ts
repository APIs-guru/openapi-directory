import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: string;
}


export class DeleteTagHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class DeleteTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteTagPathParams;

  @Metadata()
  headers: DeleteTagHeaders;
}


export class DeleteTagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
