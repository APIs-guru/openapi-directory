import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LayerDirectiveEnum {
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
/**
 * Layer holds metadata specific to a layer of a Docker image.
**/
export declare class Layer extends SpeakeasyBase {
    arguments?: string;
    directive?: LayerDirectiveEnum;
}
