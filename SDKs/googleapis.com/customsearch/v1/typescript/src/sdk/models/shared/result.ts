import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResultImage
/** 
 * Image belonging to a custom search result.
**/
export class ResultImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=byteSize" })
  byteSize?: number;

  @SpeakeasyMetadata({ data: "json, name=contextLink" })
  contextLink?: string;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=thumbnailHeight" })
  thumbnailHeight?: number;

  @SpeakeasyMetadata({ data: "json, name=thumbnailLink" })
  thumbnailLink?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnailWidth" })
  thumbnailWidth?: number;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}


// ResultLabels
/** 
 * Refinement label associated with a custom search result.
**/
export class ResultLabels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=label_with_op" })
  labelWithOp?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// Result
/** 
 * A custom search result.
**/
export class Result extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cacheId" })
  cacheId?: string;

  @SpeakeasyMetadata({ data: "json, name=displayLink" })
  displayLink?: string;

  @SpeakeasyMetadata({ data: "json, name=fileFormat" })
  fileFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=formattedUrl" })
  formattedUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=htmlFormattedUrl" })
  htmlFormattedUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=htmlSnippet" })
  htmlSnippet?: string;

  @SpeakeasyMetadata({ data: "json, name=htmlTitle" })
  htmlTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: ResultImage;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=labels", elemType: ResultLabels })
  labels?: ResultLabels[];

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=mime" })
  mime?: string;

  @SpeakeasyMetadata({ data: "json, name=pagemap" })
  pagemap?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
