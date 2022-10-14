package shared

type LayerDirectiveEnum string

const (
	LayerDirectiveEnumDirectiveUnspecified LayerDirectiveEnum = "DIRECTIVE_UNSPECIFIED"
	LayerDirectiveEnumMaintainer           LayerDirectiveEnum = "MAINTAINER"
	LayerDirectiveEnumRun                  LayerDirectiveEnum = "RUN"
	LayerDirectiveEnumCmd                  LayerDirectiveEnum = "CMD"
	LayerDirectiveEnumLabel                LayerDirectiveEnum = "LABEL"
	LayerDirectiveEnumExpose               LayerDirectiveEnum = "EXPOSE"
	LayerDirectiveEnumEnv                  LayerDirectiveEnum = "ENV"
	LayerDirectiveEnumAdd                  LayerDirectiveEnum = "ADD"
	LayerDirectiveEnumCopy                 LayerDirectiveEnum = "COPY"
	LayerDirectiveEnumEntrypoint           LayerDirectiveEnum = "ENTRYPOINT"
	LayerDirectiveEnumVolume               LayerDirectiveEnum = "VOLUME"
	LayerDirectiveEnumUser                 LayerDirectiveEnum = "USER"
	LayerDirectiveEnumWorkdir              LayerDirectiveEnum = "WORKDIR"
	LayerDirectiveEnumArg                  LayerDirectiveEnum = "ARG"
	LayerDirectiveEnumOnbuild              LayerDirectiveEnum = "ONBUILD"
	LayerDirectiveEnumStopsignal           LayerDirectiveEnum = "STOPSIGNAL"
	LayerDirectiveEnumHealthcheck          LayerDirectiveEnum = "HEALTHCHECK"
	LayerDirectiveEnumShell                LayerDirectiveEnum = "SHELL"
)

type Layer struct {
	Arguments *string             `json:"arguments,omitempty"`
	Directive *LayerDirectiveEnum `json:"directive,omitempty"`
}
