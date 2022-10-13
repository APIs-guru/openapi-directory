package shared

type FsCommandPositionOptionEnum string

const (
	FsCommandPositionOptionEnumCentered                  FsCommandPositionOptionEnum = "CENTERED"
	FsCommandPositionOptionEnumDistanceFromTopLeftCorner FsCommandPositionOptionEnum = "DISTANCE_FROM_TOP_LEFT_CORNER"
)

type FsCommand struct {
	Left           *int32                       `json:"left"`
	PositionOption *FsCommandPositionOptionEnum `json:"positionOption"`
	Top            *int32                       `json:"top"`
	WindowHeight   *int32                       `json:"windowHeight"`
	WindowWidth    *int32                       `json:"windowWidth"`
}
