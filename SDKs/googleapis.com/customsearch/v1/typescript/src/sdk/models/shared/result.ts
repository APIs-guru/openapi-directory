import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


// ResultImage
/** 
 * Image belonging to a custom search result.
**/
export class ResultImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=byteSize" })
  byteSize?: number;

  @Metadata({ data: "json, name=contextLink" })
  contextLink?: string;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=thumbnailHeight" })
  thumbnailHeight?: number;

  @Metadata({ data: "json, name=thumbnailLink" })
  thumbnailLink?: string;

  @Metadata({ data: "json, name=thumbnailWidth" })
  thumbnailWidth?: number;

  @Metadata({ data: "json, name=width" })
  width?: number;
}


// ResultLabels
/** 
 * Refinement label associated with a custom search result.
**/
export class ResultLabels extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=label_with_op" })
  labelWithOp?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


// Result
/** 
 * A custom search result.
**/
export class Result extends SpeakeasyBase {
  @Metadata({ data: "json, name=cacheId" })
  cacheId?: string;

  @Metadata({ data: "json, name=displayLink" })
  displayLink?: string;

  @Metadata({ data: "json, name=fileFormat" })
  fileFormat?: string;

  @Metadata({ data: "json, name=formattedUrl" })
  formattedUrl?: string;

  @Metadata({ data: "json, name=htmlFormattedUrl" })
  htmlFormattedUrl?: string;

  @Metadata({ data: "json, name=htmlSnippet" })
  htmlSnippet?: string;

  @Metadata({ data: "json, name=htmlTitle" })
  htmlTitle?: string;

  @Metadata({ data: "json, name=image" })
  image?: ResultImage;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=labels", elemType: shared.ResultLabels })
  labels?: ResultLabels[];

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=mime" })
  mime?: string;

  @Metadata({ data: "json, name=pagemap" })
  pagemap?: Map<string, any>;

  @Metadata({ data: "json, name=snippet" })
  snippet?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
