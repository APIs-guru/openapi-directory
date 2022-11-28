import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaActionOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  sourceupdate?: string;
}


export class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaActionSource extends SpeakeasyBase {
  @SpeakeasyMetadata()
  package?: string;

  @SpeakeasyMetadata()
  project?: string;

  @SpeakeasyMetadata()
  rev?: number;
}


export class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaActionTarget extends SpeakeasyBase {
  @SpeakeasyMetadata()
  package?: string;

  @SpeakeasyMetadata()
  project?: string;
}


export class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaAction extends SpeakeasyBase {
  @SpeakeasyMetadata()
  options?: OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaActionOptions;

  @SpeakeasyMetadata()
  source?: OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaActionSource;

  @SpeakeasyMetadata()
  target?: OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaActionTarget;

  @SpeakeasyMetadata()
  type?: string;
}


export class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaHistory extends SpeakeasyBase {
  @SpeakeasyMetadata()
  comment?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  when?: string;

  @SpeakeasyMetadata()
  who?: string;
}


export class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaReview1 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  byUser?: string;

  @SpeakeasyMetadata()
  state?: string;

  @SpeakeasyMetadata()
  when?: string;

  @SpeakeasyMetadata()
  who?: string;
}


export class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaReview2 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  byGroup?: string;

  @SpeakeasyMetadata()
  state?: string;

  @SpeakeasyMetadata()
  when?: string;

  @SpeakeasyMetadata()
  who?: string;
}


export class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaReview3 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  byProject?: string;

  @SpeakeasyMetadata()
  state?: string;

  @SpeakeasyMetadata()
  when?: string;

  @SpeakeasyMetadata()
  who?: string;
}


export class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaReview4 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  byPackage?: string;

  @SpeakeasyMetadata()
  state?: string;

  @SpeakeasyMetadata()
  when?: string;

  @SpeakeasyMetadata()
  who?: string;
}


export class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaState extends SpeakeasyBase {
  @SpeakeasyMetadata()
  comment?: string;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  when?: string;

  @SpeakeasyMetadata()
  who?: string;
}


export class OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8Schema extends SpeakeasyBase {
  @SpeakeasyMetadata()
  action?: OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaAction;

  @SpeakeasyMetadata()
  creator?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata({ elemType: OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaHistory })
  history?: OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaHistory[];

  @SpeakeasyMetadata()
  id?: number;

  @SpeakeasyMetadata()
  review?: any[];

  @SpeakeasyMetadata()
  state?: OnerequestPostRequestBodyContentApplication1xmlPercent20charsetEqualUtf8SchemaState;
}
