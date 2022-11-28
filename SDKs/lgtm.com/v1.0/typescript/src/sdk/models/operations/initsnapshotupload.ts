import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InitSnapshotUploadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=language" })
  language: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-id" })
  projectId: number;
}


export class InitSnapshotUploadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=commit" })
  commit: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: Date;
}


export class InitSnapshotUploadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class InitSnapshotUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InitSnapshotUploadPathParams;

  @SpeakeasyMetadata()
  queryParams: InitSnapshotUploadQueryParams;

  @SpeakeasyMetadata()
  security: InitSnapshotUploadSecurity;
}


export class InitSnapshotUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  uploadSession?: shared.UploadSession;
}
