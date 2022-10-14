package shared

type FsCommandPositionOptionEnum string

const (
	FsCommandPositionOptionEnumCentered                  FsCommandPositionOptionEnum = "CENTERED"
	FsCommandPositionOptionEnumDistanceFromTopLeftCorner FsCommandPositionOptionEnum = "DISTANCE_FROM_TOP_LEFT_CORNER"
)

type FsCommand struct {
	Left           *int32                       `json:"left,omitempty"`
	PositionOption *FsCommandPositionOptionEnum `json:"positionOption,omitempty"`
	Top            *int32                       `json:"top,omitempty"`
	WindowHeight   *int32                       `json:"windowHeight,omitempty"`
	WindowWidth    *int32                       `json:"windowWidth,omitempty"`
}
