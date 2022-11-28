import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LayerDirectiveEnum {
    DirectiveUnspecified = "DIRECTIVE_UNSPECIFIED",
    Maintainer = "MAINTAINER",
    Run = "RUN",
    Cmd = "CMD",
    Label = "LABEL",
    Expose = "EXPOSE",
    Env = "ENV",
    Add = "ADD",
    Copy = "COPY",
    Entrypoint = "ENTRYPOINT",
    Volume = "VOLUME",
    User = "USER",
    Workdir = "WORKDIR",
    Arg = "ARG",
    Onbuild = "ONBUILD",
    Stopsignal = "STOPSIGNAL",
    Healthcheck = "HEALTHCHECK",
    Shell = "SHELL"
}


// Layer
/** 
 * Layer holds metadata specific to a layer of a Docker image.
**/
export class Layer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arguments" })
  arguments?: string;

  @SpeakeasyMetadata({ data: "json, name=directive" })
  directive?: LayerDirectiveEnum;
}
